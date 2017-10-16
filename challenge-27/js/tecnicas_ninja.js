(function(){
    'use strict';

    var arr = [ 1, 2, 3, 4, 5 ];
    var arr2 = arr.slice();

    /*
    var $divs = document.querySelectorAll('div');
    var $divsCopy = Array.prototype.slice.call( $divs );
    */

    console.log( arr, arr2, arr === arr2 );

    //Como saber o tipo de dado real de um objeto?
    console.log( Object.prototype.toString.call( [ 1, 2 ] ) ); //[object Array]
    console.log( Object.prototype.toString.call( function (){} )); //[object Function]

    function is( obj ){
        return Object.prototype.toString.call( obj );
    }

    function isArray( obj ){
        return is( obj ) === '[object Array]';
    }

    function isFunction( obj ){
        return is( obj ) === '[object Function]';
    }

    console.log( is( [ 1, 2, 3 ] ) );
    console.log( isArray( [ 1 ] ) );
    console.log( isArray( {} ) );
    console.log( isFunction( {} ) );
    
})();