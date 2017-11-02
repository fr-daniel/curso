(function(){
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/fernando');
  ajax.send();
  ajax.addEventListener( 'readystatechange', function( e ){
    if( ajax.readyState === 4 )
      console.log( ajax.responseText, ajax.status );
  }, false );

})();
