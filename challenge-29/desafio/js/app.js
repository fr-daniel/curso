(function( doc, DOM ){
    'use strict';
    
    function app(){
        var $buttonCadastrar = new DOM('[data-js="buttonCadastrar"]');        
        var ajax = new XMLHttpRequest();

        $buttonCadastrar.get()[0].addEventListener( 'click', handleCarInfo, false );

        function handleCarInfo( event ){
            event.preventDefault();
            setCarInfo( getInforCar() );
        }

        function getInforCar(){
            var $inputUtlFotoCar = new DOM('[data-js="utlFotoCar"]');
            var $inputPlacaCar = new DOM('[data-js="placaCar"]');
            var $inputMarcaCar = new DOM('[data-js="marcaCar"]');
            var $inputCorCar = new DOM('[data-js="corCar"]');
            var $inputAnoCar = new DOM('[data-js="anoCar"]');
            return {
                urlFoto: $inputUtlFotoCar.get()[0].value,
                marcaCar: $inputMarcaCar.get()[0].value,
                placaCar: $inputPlacaCar.get()[0].value,
                anoCar: $inputAnoCar.get()[0].value,
                corCar: $inputCorCar.get()[0].value
            };
        }

        function setCarInfo( infomacoesCar ){
            var fragment = document.createDocumentFragment();
            var $newTrCar = document.createElement('tr');    
            for ( var key in infomacoesCar ) {
                var $newTdCar = document.createElement('td');
                $newTdCar.appendChild( doc.createTextNode( infomacoesCar[key] ) );
                $newTrCar.appendChild( $newTdCar );
            }
            fragment.appendChild( $newTrCar );
            var $corpoTable = new DOM('[data-js="corpoTable"]');
            $corpoTable.get()[0].appendChild( fragment );
        }

        (function handleInfoEmpresa(){
            ajax.open( 'GET', 'js/company.json' );
            ajax.send();
            ajax.addEventListener( 'readystatechange', handleStateChange , false );
        })();

        function handleStateChange(){
            if( isRequestOk() )
                setInfoEmpresa( JSON.parse( ajax.responseText ) );
        }

        function isRequestOk(){
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function setInfoEmpresa( objectInfoEmpresa ){
            var $infoEmpresa = new DOM('[data-js="infoEmpresa"]');
            var fragment = doc.createDocumentFragment();
            var $divNameEmpresa = doc.createElement( 'div' )
            var $divTelefoneEmpresa = doc.createElement( 'div' );

            $divNameEmpresa.className = 'card-body'; 
            $divTelefoneEmpresa.className = 'float-right';

            $divNameEmpresa.appendChild( doc.createTextNode( objectInfoEmpresa.name ) );
            $divTelefoneEmpresa.appendChild( doc.createTextNode( objectInfoEmpresa.phone ) );

            $divNameEmpresa.appendChild( $divTelefoneEmpresa );

            fragment.appendChild( $divNameEmpresa );
            $infoEmpresa.get()[0].appendChild( fragment);
        }
        
    }

    window.app = app();

})( document, window.DOM );