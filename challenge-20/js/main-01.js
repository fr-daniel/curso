(function( win ){
    'use strict';
    
    //alert( 'Curso JavaScript' );
    
    var resposta = Number.parseInt(prompt( 'Qual sua idade?' ));
    console.log( resposta );

    if( !Number.isInteger(resposta) )
        console.log( 'Informe uma idade válida!' );
    else if( resposta >= 18 )
        console.log( 'Pode entrar!' );
    else
        console.log( 'Não pode entrar! ');

})( window );