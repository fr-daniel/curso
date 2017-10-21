(function( doc, dom ){
    'use strict';
    
    function app(){

        var $formCep = new DOM('[data-js="form-cep"]');
        var $cepUser = new DOM('[data-js="cepUser"]');
        var $inputLogradouro = new DOM('[data-js="inputLogradouro"]');
        var $inputBairro = new DOM('[data-js="inputBairro"]');
        var $inputEstado = new DOM('[data-js="inputEstado"]');
        var $inputCidade = new DOM('[data-js="inputCidade"]');
        var $inputCep = new DOM('[data-js="inputCep"]');
        var $messageStatus = new DOM('[data-js="status"]');     
        $formCep.on( 'submit', handleSubmitFormCep );
        var ajax = new XMLHttpRequest(); 

        function handleSubmitFormCep( event ){
            event.preventDefault();
            ajax.open( 'GET', getUrl() );
            ajax.send();
            addMessageStatus('loading');
            ajax.addEventListener( 'readystatechange', handleStateChange, false );
        }
    
        function handleStateChange(){
            if( isRequestOk() )
                fillCepFields();
        }
    
        function isRequestOk(){
            return ajax.readyState === 4 && ajax.status === 200;
        }  
    
        function fillCepFields(){
            var data = parseData();
            
            if( data.error )
                addMessageStatus('error');
            else
                addMessageStatus('ok');
                
            $inputLogradouro.get()[0].value = data.logradouro;
            $inputBairro.get()[0].value = data.bairro;
            $inputEstado.get()[0].value = ufToEstadoName( data.uf );
            $inputCidade.get()[0].value = data.localidade;
            $inputCep.get()[0].value = data.cep;
        }
    
        function clearCep(){
            return $cepUser.get()[0].value.replace( /\D+/g, '' );
        }
    
        function getUrl( ){
            return 'https://viacep.com.br/ws/' + clearCep() + '/json/';
        }   
        
        function parseData(){
            var result = JSON.parse( ajax.responseText );
            if( result.erro ){
                return {
                    logradouro: '',
                    bairro: '',
                    uf: '',
                    localidade: '',
                    cep: '',
                    error: true
                };
            }
            result.error = false;
            return result;
        }
        
        function getMessage( type ){
            return {
                loading: 'Buscando informações para o CEP [CEP]...',
                ok: 'Endereço referente ao CEP [CEP]:',
                error: 'Não encontramos o endereço para o CEP [CEP].'
            }[ type ].replace( /\[CEP\]/, clearCep() );
        }
    
        function getAlertType( type ){
            return {
                'ok': 'alert-success',
                'loading': 'alert-info',
                'error': 'alert-danger'
            }[ type ];
        }
        
        function removeMessageStatus(){
            var $alertMessage = $messageStatus.get()[0].firstElementChild;
            if( $alertMessage )
                $messageStatus.get()[0].removeChild( $alertMessage );
        }
    
        function addMessageStatus( type ){
            removeMessageStatus();  
            var fragmentMsgStatus = doc.createDocumentFragment();
            var divAlert = doc.createElement('div');
            divAlert.appendChild( doc.createTextNode( getMessage( type ) ) );
            divAlert.className = 'alert ' + getAlertType( type );
            fragmentMsgStatus.appendChild( divAlert );
            $messageStatus.get()[0].appendChild( fragmentMsgStatus );
        }
    
        function ufToEstadoName( uf ){
            var estados = {
                'AC': 'Acre',	 
                'AL': 'Alagoas',
                'AP': 'Amapá',
                'AM': 'Amazonas',
                'BA': 'Bahia',
                'CE': 'Ceará',
                'DF': 'Distrito Federal',
                'ES': 'Espírito Santo',
                'GO': 'Goiás',
                'MA': 'Maranhão',
                'MT': 'Mato Grosso',
                'MS': 'Mato Grosso do Sul',
                'MG': 'Minas Gerais',
                'PA': 'Pará',
                'PB': 'Paraíba', 
                'PR': 'Paraná',	 
                'PE': 'Pernambuco',	 
                'PI': 'Piauí',	 
                'RJ': 'Rio de Janeiro', 
                'RN': 'Rio Grande do Norte', 
                'RS': 'Rio Grande do Sul',	 
                'RO': 'Rondônia',
                'RR': 'Roraima',	 
                'SC': 'Santa Catarina',	 
                'SP': 'São Paulo',	 
                'SE': 'Sergipe',	 
                'TO': 'Tocantins'
            };
            return estados[ uf ] ? estados[ uf ] : '';
        }

        return {
            ufToEstadoName: ufToEstadoName,
            removeMessageStatus: removeMessageStatus
        };
    }

    window.app = app();

})( document, window.DOM )