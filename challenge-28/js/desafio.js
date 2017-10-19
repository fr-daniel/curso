(function( doc ){
    'use strict';

    function DOM( elements ){
        this.element = doc.querySelectorAll( elements ); 
    }

    DOM.prototype.on = function on( eventType, callback ){
        Array.prototype.forEach.call( this.element, function( elemento ){
            elemento.addEventListener( eventType, callback, false );
        });
    };

    DOM.prototype.off = function of( eventType, callback ){
        Array.prototype.forEach.call( this.element, function( elemento ){
            elemento.removeEventListener( eventType, callback, false );
        });
    };

    DOM.prototype.get = function get(){
        return this.element;
    };

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply( this.element, arguments );
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply( this.element, arguments );
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply( this.element, arguments );
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply( this.element, arguments );
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply( this.element, arguments );
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply( this.element, arguments );
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply( this.element, arguments );
    };

    DOM.prototype.isArray = function isArray( param ){
        return Object.prototype.toString.call( param ) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject( param ){
        return Object.prototype.toString.call( param ) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction( param ){
        return Object.prototype.toString.call( param ) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber( param ){
        return Object.prototype.toString.call( param ) === '[object Number]';
    };

    DOM.prototype.isString = function isString( param ){
        return Object.prototype.toString.call( param ) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean( param ){
        return Object.prototype.toString.call( param ) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull( param ){
        var tipoParam = Object.prototype.toString.call( param );
        return  tipoParam === '[object Null]' || tipoParam === '[object Undefined]';
    };

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
        if( isRequestOk() ){
            fillCepFields();
        }
    }

    function getUrl( ){
        return 'https://viacep.com.br/ws/' + clearCep() + '/json/';
    }   

    function clearCep(){
        return $cepUser.get()[0].value.replace( /\D+/g, '' );
    }

    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }  
    
    function fillCepFields(){
        var data = parseData();
        
        if( !data || data.erro ){
            addMessageStatus('error');
            limparCamposEndereco();
            return;
        }
        
        addMessageStatus('ok');
        $inputLogradouro.get()[0].value = data.logradouro;
        $inputBairro.get()[0].value = data.bairro;
        $inputEstado.get()[0].value = ufToEstadoName( data.uf );
        $inputCidade.get()[0].value = data.localidade;
        $inputCep.get()[0].value = data.cep;
    }

    function parseData(){
        var result;
        try{
            result = JSON.parse( ajax.responseText );
        } catch( e ){
            result = null;
        }
        return result;
    }
    
    function getMessage( type ){
        return {
            loading: 'Buscando informações para o CEP [CEP]...',
            ok: 'Endereço referente ao CEP [CEP]:',
            error: 'Não encontramos o endereço para o CEP [CEP].'
        }[ type ].replace( /\[CEP\]/, clearCep() );
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
        return estados[ uf ];
    }
    
    function limparCamposEndereco(){
       $inputLogradouro.get()[0].value = '';
       $inputBairro.get()[0].value = '';
       $inputEstado.get()[0].value = '';
       $inputCidade.get()[0].value = '';
       $inputCep.get()[0].value = '';
    }
    
    function removeMessageStatus(){
        var $alertMessage = $messageStatus.get()[0].firstElementChild;
        if( $alertMessage )
            $messageStatus.get()[0].removeChild( $alertMessage );
    }

    function getAlertType( type ){
        return {
            'ok': 'alert-success',
            'loading': 'alert-info',
            'error': 'alert-danger'
        }[ type ];
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

})( document );