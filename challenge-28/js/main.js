(function(){
    'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open( 'GET', 'js/data/data.json' );
    ajax.send();

    //Evento onreadystatechange
    //verifica quando o estado mudou 

    /*ajax.addEventListener( 'readystatechange', function(){
        console.log( 'Terminou requisição', ajax.readyState, ajax.status );
    }, false );*/

    //Estado atual readyState
    // 0 - não enviado : método open não foi chamado, 
    // 1 - conexão aberta
    // 2 - Headers recebidos
    // 3 - carregando corpo do request
    // 4 - concluído 

    //HTTP status
    // 200, 403, 404, 500, etc
    //ajax.status

    console.log( 'Carregando...' );
    var response = ''; 
    ajax.addEventListener( 'readystatechange', function(){
        if( isRequestOk() ){
            try{
                response = JSON.parse( ajax.responseText ); 
            } catch( e ){
                response = ajax.responseText;
            }
            console.log( response );
        }
    }, false );

    function isRequestOk(){
        return ajax.status === 200 && ajax.readyState === 4;
    }

    //responseText
    //responseXML

    //Tratamento de erros

})();