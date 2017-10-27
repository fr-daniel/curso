(function(){
    'use strict';
    //Closure

    /*var scope = 'global scope';

    function checkScope(){
        var scope = 'local scope';
        function func(){ return scope; }
        return func;
    }

    console.log( checkScope()() );*/

    /*var counter = 0;

    var increment = (function(){
        var counter = 0;
        return (function(){
            var counter = 10;
            return function(){
                return counter++;
            }
        })();
    })();

    function otherCounter(){
        counter = 150;
    }

    otherCounter();

    console.log( increment() );
    console.log( increment() );
    console.log( increment() );
    console.log( increment() );
    console.log( increment() );*/

    //Style in JS
    // não recomendado
    var $div = document.querySelector('div');
    $div.style.padding = '10px'; 
    $div.style.textAlign = 'center'; 
    $div.style.color = 'white'; 
    $div.style.width = '100px'; 
    $div.style.height = '100px'; 
    $div.style.backgroundColor = 'black';
    
    //outra opção
        //setAttribute( 'style' 'codigo css' );

    //element.classList
    //add, remove, toggle, contains
    console.log( $div.classList );

    if( $div.classList.contains( 'container' ) )
        console.log( 'existe!' );

    $div.classList.add( 'blue' );

    console.log( $div.classList );

    //classList.toggle : se tiver remove, se não adiciona

    $div.addEventListener( 'click', function(){
        this.classList.toggle( 'blue' );
    }, false );

})();
