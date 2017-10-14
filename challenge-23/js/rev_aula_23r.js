(function( win, doc ){
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonDigito = doc.querySelectorAll('[data-js="button-digito"]');
    var $buttonOperacao = doc.querySelectorAll('[data-js="button-operacao"]');
    var $buttonEqual = doc.querySelector('[data-js="button-calcular"]');
    var $buttonCe = doc.querySelector('[data-js="button-ce"]');

    Array.prototype.forEach.call( $buttonDigito, function( element ){ 
        element.addEventListener( 'click', addDigito, false );  
    });

    Array.prototype.forEach.call( $buttonOperacao, function( element ){
        element.addEventListener( 'click', addOperacao, false );
    } );
    
    $buttonCe.addEventListener( 'click', clearVisor, false );
    $buttonEqual.addEventListener( 'click', realizarCalculo, false );

    
    function addDigito( event ){
        return $visor.value === '0' ? $visor.value = this.value : $visor.value += this.value;
    }

    function addOperacao( event ){
        removerUltimaOperacao();
        return $visor.value += this.value;
    }

    function clearVisor( event ){
        $visor.value = 0;
    }

    function realizarCalculo( event ){
        removerUltimaOperacao();
        realizarDivisionOrMultiplication();
        realizarAdicaoOrSubtracao();
    }

    function verificarUltimoDigitoEqualsOperacao(){
        return /[+\-x÷]{1}$/.test( $visor.value );
    }

    function removerUltimaOperacao(){
        if( verificarUltimoDigitoEqualsOperacao() )
            $visor.value = $visor.value.slice( 0, $visor.value.length - 1 );
    }

    function selectOperacao( operacao ){
        var operacoes = {
            '+': function( x, y ){
                return x + y;
            },
            '-': function( x, y ){
                return x - y;
            },
            'x': function( x, y ){
                return x * y;
            },
            '÷': function( x, y ){
                return x / y;
            }
        };
        return operacoes[ operacao ];
    }

    function realizarDivisionOrMultiplication(){
        $visor.value = $visor.value.replace(/(\d+|\d+\.\d+)([x÷])(\d+|\d+\.\d+)/, function( regex, valor1, operation, valor2 ){
            return selectOperacao( operation )( +valor1, +valor2 );
        } );
        if( /[x÷]/.test( $visor.value ) )
            return realizarDivisionOrMultiplication();
    }

    function realizarAdicaoOrSubtracao(){
        $visor.value = $visor.value.replace(/(\d+|\d+\.\d+)([+\-])(\d+|\d+\.\d+)/, function( regex, valor1, operation, valor2 ){
            return selectOperacao( operation )( +valor1, +valor2 );
        });
        if( /[+\-]/.test( $visor.value ) )
            return realizarAdicaoOrSubtracao();
    }

})( window, document );