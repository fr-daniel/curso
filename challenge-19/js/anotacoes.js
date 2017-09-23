/*
    ^ : início de string, dentro de uma lista se torna uma negação
    verifica se está no início da string
        ex: ^da
    $ : fim de string
        ex: el$
    m: flag multi line
    ?: um ou zero caractere, após uma repetidor faz a captura não gulosa
        ex: <\w+>.+?<\/\w+>
    (?:) agrupamento sem captura

    Referência detro de regex: /1 /2
        ex: <(\w+)>.+<\/(\1)>

    Métodos de string
    .match( regex );
    .replace( regex, string|function );
    .split( regex );
        ex: '111.222.333-44'.split(/\D/);
    .search( regex );
        retorna o local do primeiro indice do caractere buscado

    O construtor RegExp()
    var regex = new RegExp('el');
        /el/


    Métodos:
        regex .test( string );
            -> true ou false
            ex: /\d/.test('da4niel') : true;
        
        regex .exec( string ); //faz o casamento a cada vez que é executado
        regex .lastIndex

    Alguns caracteres especiais de regex podem ser utilizados em string
    console.log('\tDaniel \nLima');
    console.log(' \'DANIEL\' ');
*/