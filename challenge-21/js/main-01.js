(function( win, doc ){
    'use strict';

/*     console.log( 'início' );
    //executa apenas uma vez

    setTimeout( function(){
        console.log( 'executou setTimeout' );
    }, 1000 );

    setInterval( function(){
        console.log( 'executou o setInterval' );
    }, 1000 );

    console.log( 'fim' ); */

    var counter = 0;
    var $button = doc.querySelector( '[data-js="button"]' );
    var temporizador;

    /*function timer(){
        console.log( 'timer', counter++ );
        if( counter > 20 )
            return;
        temporizador = setTimeout( timer, 1000 );
    }

    timer(); 

    $button.addEventListener( 'click', function(){
        clearTimeout( temporizador );
    }, false ); */

     function timer(){
        console.log( 'timer', counter++ );
    }

    temporizador = setInterval( timer, 1000 );     

    $button.addEventListener( 'click', function(){
        clearInterval( temporizador );
    }, false );

})( window, document );