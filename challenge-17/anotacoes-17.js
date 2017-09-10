/*
    Expressões Regulares
    - Manipular Strings
    - Tipo primitivo -> //
    - Objeto RegExp()
    - Literais 
    Flags
    - g: global i: case

    \w -> caracteres alfanuméricos e _
    \d -> números

    | -> ou 

    Classes de caracteres
    [abc123] -> busca esses valores
    
    Agrupamento
    (200)
    (ba)

    Sequência
    [0-9]
    [a-z]
    [A-Z]
    [0-9a-z]

    string.match(regex);
    string.replace(regex, 'string');

*/

var texto = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.';
console.log( texto.replace(/(de)/g, '--$1--') );

texto.replace(/(d)(e)/g, '$1$1');
texto.replace(/(d)(e)/g, '--$&');

'Daniel'.replace(/(\w)(\w)/g, function( capturaTotal, d, e ){
    return d.toUpperCase() + e.toLowerCase(); 
});

