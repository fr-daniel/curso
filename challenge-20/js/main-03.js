(function( win, doc ){
    'use strict';

    //Formulários
    // atributo .value : para pegar valores do formulário
    //    é um getter e setter

    var $inputUserName = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );

    /*
    $inputUserName.value = 'Daniel Lima';
    $inputPassword.value = 'minhasenha';

    console.log( $inputUserName.value, $inputPassword.value );
    */

    //Introdução à Eventos
    // .addEventListener()
    var $button = doc.querySelector( '#button' );
    $button.addEventListener( 'click', function( event ){
        event.preventDefault();
        console.log( 'Click no botão' );
    }, false);

    $inputUserName.addEventListener( 'click', function(){
        alert( 'Clicou no input' );
    }, false );

    doc.addEventListener( 'click', function(){
        alert( 'Clicou no documento' );
    }, false );

})( window, document );