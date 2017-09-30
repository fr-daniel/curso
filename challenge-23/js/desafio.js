(function( win, doc ){
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    Array.prototype.forEach.call( $buttonsNumbers, function( button ){
        button.addEventListener( 'click', handleClickNumber, false );
    } );

    Array.prototype.forEach.call( $buttonsOperations, function( button ){
        button.addEventListener( 'click', handleClickOperation ,false );
    } );

    $buttonCE.addEventListener( 'click', handleClickCE, false );
    $buttonEqual.addEventListener( 'click', handleClickEqual, false );

    function handleClickNumber( event ){
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
        var allValues = $visor.value.match(/(?:\d+\.\d+)|\d+|[+x÷-]/g);
        if( allValues.length >= 3 ){
            var realizaOperation = defineOperation( allValues[1] );
            $visor.value = realizaOperation( allValues[0], allValues[2] ) + allValues.splice(3).join('');
            return handleClickEqual( event );
        }
    }

    function isLastItemAnOperation(){
        var regex = /[+\-x÷]{1}/;
        return regex.test( $visor.value[ $visor.value.length - 1 ] );
    }

    function removeLastItemIfIsAnOperation(){
        if( isLastItemAnOperation() )
            $visor.value = $visor.value.slice( 0, $visor.value.length - 1 );
    }

    function defineOperation( operador ){
        var operations = {
            '+': function( x, y ){
                return +x + +y;
            },
            '-': function( x, y ){
                return +x - +y;
            },
            '÷': function( x, y ){
                return +x / +y;
            },
            'x': function( x, y ){
                return +x * +y;
            }
        }
        return operations[operador];
    }



})( window, document );