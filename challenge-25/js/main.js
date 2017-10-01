(function(){
    'use strict';

    function on( element, event, callback ){
        document.querySelector( element )
            .addEventListener( event, callback, false );
    }

    function off( element, event, callback ){
        document.querySelector( element )
            .removeEventListener( event, callback, false );
    }

    /* function handleClick( event ){
        event.preventDefault();
        alert('clicou no a');
    }

    on( '[data-js="link"]', 'click', handleClick );
    off( '[data-js="link"]', 'click', handleClick );

    on( '[data-js="link"]', 'click', function( event ){
        event.preventDefault();
        alert( 'novo evento clicou no a' );
    }); 

    on( '[data-js="div"]', 'click', function( event ){
        alert( 'clicou na div' );
    });

    on( '[data-js="span"]', 'click', function( event ){
        alert( 'clicou no span' );
    }); */

    on( '[data-js="input"]', 'input', function(){
        console.log( this.value );
    });

    on( '[data-js="select"]', 'change', function(){
        console.log( this.value );
        document.querySelector('[data-js="input"]').value = this.value;
    });

})();