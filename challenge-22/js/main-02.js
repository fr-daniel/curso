(function(){
    'use strict';
    /*
        Array-like como Arrays
    */

    function myFunction(){
       Array.prototype.forEach.call( arguments, function( item, index ){
           console.log( item );
       });
    }

     myFunction( 1, 2, 3, 4, 5, 6 );


})();