(function( win, doc ){
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    function initialize(){
        initEvents();
    }

    function initEvents(){
        Array.prototype.forEach.call( $buttonsNumbers, function( button ){
            button.addEventListener( 'click', handleClickNumber, false );
        } );
    
        Array.prototype.forEach.call( $buttonsOperations, function( button ){
            button.addEventListener( 'click', handleClickOperation ,false );
        } );
    
        $buttonCE.addEventListener( 'click', handleClickCE, false );
        $buttonEqual.addEventListener( 'click', handleClickEqual, false );
    }

    function handleClickNumber( event ){
        if( $visor.value === '0' )
            return $visor.value = this.value;
        $visor.value += this.value;
    }

    function handleClickOperation( event ){
        removeLastItemIfIsAnOperation();
        $visor.value += this.value;
    }

    function handleClickCE( event ){
        $visor.value = 0;
    }

    function handleClickEqual( event ){
        removeLastItemIfIsAnOperation();
        realizarDivisionOrMultiplication();
        realizarAdicaoOrSubtracao();
    }

    function isLastItemAnOperation(){
        var regex = /[+\-x÷]{1}/;
        return regex.test( $visor.value[ $visor.value.length - 1 ] );
    }

    function removeLastItemIfIsAnOperation(){
        if( isLastItemAnOperation() )
            $visor.value = $visor.value.slice( 0, $visor.value.length - 1 );
    }

    function realizarOperation( operador, valor1, valor2 ){
        var numberValor1 = +valor1;
        var numberValor2 = +valor2;
        switch( operador ){
            case '+':
                return numberValor1 + numberValor2;
            case '-':
                return numberValor1 - numberValor2;
            case 'x':
                return numberValor1 * numberValor2;
            case '÷': 
                return numberValor1 / numberValor2;
            default:
                return 0;
        }
    }
    
    function realizarDivisionOrMultiplication(){
        $visor.value = $visor.value.replace(/(\d+|\d+\.\d+)([x÷])(\d+|\d+\.\d+)/, function( regex, valor1, operation, valor2 ){
            return realizarOperation( operation, valor1, valor2 );
        } );
        if( /[x÷]/.test( $visor.value ) )
            return realizarDivisionOrMultiplication();
    }

    function realizarAdicaoOrSubtracao(){
        $visor.value = $visor.value.replace(/(\d+|\d+\.\d+)([+\-])(\d+|\d+\.\d+)/, function( regex, valor1, operation, valor2 ){
            return realizarOperation( operation, valor1, valor2 );
        });
        if( /[+\-]/.test( $visor.value ) )
            return realizarAdicaoOrSubtracao();
    }
    
    initialize();

})( window, document );