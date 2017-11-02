(function(){
  'use strict';

  /*
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/larissa');
  ajax.send();

  ajax.onreadystatechange = function( e ){
    if( ajax.readyState === 2 ){
      console.log( 'headers ok '); //pegar parte da requisição
      ajax.abort();
    }

    if( ajax.readyState === 4 )
      console.log( ajax.responseText, ajax.status );
  };
  */

  /*var ajax = new XMLHttpRequest();
  ajax.open( 'POST', 'http://localhost:3000/user' );
  ajax.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
  ajax.send( 'username=maria&name=Maria&lastname=Araujo&age=23' );

  console.log( 'Cadastrando usuário...' );
  ajax.onreadystatechange = function( e ){
    if( ajax.readyState === 4  )
      console.log( 'Usuário cadastrado!', ajax.responseText );
  };*/

  var get = new XMLHttpRequest();
  get.open( 'GET', 'http://localhost:3000/user/roberto' );
  get.send();

  get.onreadystatechange = function(){
    if( get.readyState === 4 )
      console.log( get.responseText );
  };

})();
