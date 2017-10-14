(function( win, doc ){
    'use strict';
    
    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var temporizador;

    $start.addEventListener( 'click', countTimer , false );
    $stop.addEventListener( 'click', stopTimer, false );
    $reset.addEventListener( 'click', resetTimer, false );
    
    function countTimer(){
        $timer.value = +$timer.value + 1;
        temporizador = setTimeout( countTimer, 1000 );
    }

    function stopTimer(){
        clearTimeout( temporizador );
    }

    function resetTimer(){
        stopTimer();
        $timer.value = 0;
    }

})( window, document );