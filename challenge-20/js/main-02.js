(function( win, doc ){
    'use strict';
    
    /*
    alert( 'Essa ação requer confirmação!' );

    var name = prompt( 'Qual seu nome?' );

    if( name )
        console.log( 'Olá,', name );
    else
        console.log( 'Não respondeu :(' );
    
    var del = confirm( name + ', tem certeza que deseja excluir o registro? ');
    
    if( del )
        console.log( 'Excluído com sucesso!', del );
    else
        console.log( 'Ação cancelada', del );
    */

    /*
    Métodos geElementBy são dinâmicos
    console.log( doc.getElementById( 'my-link' ) );
    console.log( doc.getElementsByClassName( 'my-links' ) );    
    console.log( doc.getElementsByTagName( 'a' ) );
    
    var $inputs = doc.getElementsByTagName( 'input' );
    console.log( $inputs.length );
    */

    // querySelector - não causa efeito colateral
    //  a seleção acontece igual ao seletor do css
    
    //var $inputs = doc.querySelectorAll( 'input' );
    //var $inputs = doc.querySelectorAll( '.input' );
    var $inputs = doc.querySelector( '#username' );

    console.log( $inputs );

})( window, document );