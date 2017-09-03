/*
    Objetos
    - Mutáveis
    - Manipulados por referência  

*/

    //Mutáveis
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2'
    }

    var obj2 = {
        prop1: 'prop1',
        prop2: 'prop2'
    }

    obj.prop1 = 'propriedade 1';
    console.log( obj );

    delete obj.prop1;
    console.log( obj );

    obj.prop1 = 'prop1';
    console.log( obj );

    //Manipulados por referência

    console.log( obj === obj2 ); // -> false
    
    var objCopy = obj;
    console.log( obj === objCopy ); // -> true: referência para o mesmo objeto
    // objCopy recebeu a referência para o obj

    objCopy.prop1 = 'Olá Mundo!';
    console.log( objCopy ); // -> { prop2: 'prop2', prop1: 'Olá Mundo!' }
    console.log( obj ); // -> { prop2: 'prop2', prop1: 'Olá Mundo!' }

    //Criando Objetos
    // - Literal
    var newObj = {}

    // - Como construtor (new)

    var newObj2 = new Object();

    // - Com o Object.create(); 

    //var newObj3 = Object.create();

    //Propriedade prototype
    // protótipo do objeto criado

    console.log( Object.prototype );

    //Criando Objetos com Object.create();
    //Herança do Object.prototype
    var obj = {
        x: 1,
        y: 2
    }

    //Herança do obj
    var obj2 = Object.create( obj );
    obj2.nome = 'Daniel';
    // O objeto pai não é modificado através do obj2
    // mas se o objeto pai for modificado, o obj2 tbm será
    
    //Verificar se o obj2 tem a propriedade x especifica dele
    obj2.hasOwnProperty('x');
    // -> false - obj2 herdou do obj

    for( var prop in obj2 ){
        if( !obj2.hasOwnProperty( prop ) ){
            continue;
        }
        console.log( prop );
    }
   
    //Métodos de Objetos
    console.log( Object.keys( obj2 ) ); //retorna um array com as propriedades de um objeto
    console.log( Object.keys( obj2 ).length );

    console.log( obj.isPrototypeOf( obj2 ) );
    console.log( obj2.isPrototypeOf( obj ) );

    console.log( JSON.stringify( obj ) );
    var str = JSON.stringify( obj );
    console.log( str );
    console.log( JSON.parse( str ) );
    
    //Arrays
    //Adicionar Itens
    var arr = [];
    arr[0] = 10;
    arr[1] = 5;
    arr[2] = 'dois';
    arr[12] = 'doze';
    console.log( arr );

    arr.push('treze');
    console.log( arr );

    //Remover itens
    console.log( arr.pop() );
    console.log( arr );    

    arr = [];
    arr.push('arroz');
    arr.push('feijao');
    arr.push('macarrao');
    console.log( arr );
    var last = arr.pop();
    console.log( arr );
    console.log( last );

    //tamanho array
    console.log( arr.length );

    //juntar indices do array array.join( separdor )
    arr.push('lasanha');
    console.log( 'Meu almoço hoje será', arr.join( ', ' ) );

    //inverter a ordem do array
    //modifica o array
    console.log( arr.reverse() );
    console.log( arr );

    //sort - colocar array em ordem alfabetica
    //modifica o array
    console.log( arr.sort() );
    arr.push('arroz doce');
    console.log( arr );

