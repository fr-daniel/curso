/*
    Operador Módulo %
    Retorna o resto de uma divisão
    Ex:
        3 / 3 -> 1
        3 % 3 -> 0
        5 % 2 -> 1
    
    var num = 0;
    while( num <= 20 ){
        if( num % 2 === 0 ){
            console.log( num );
        }
        num++;
    }

    Arrays - A propriedade length
    Conta a quantidade de elementos do array

    var arr = [ 'Daniel', null, true, { bola: 'azul' }, function(){} ];
    arr.length; -> 5

    var i = 0;
    while( i < arr.length ){
        console.log( arr[ i++ ] );
    }

    Arrays - O método push();
    var arr = [ 1, 2, 3, 'Daniel', { bola: 'azul' } ];
    arr.length -> 5
    
    //arr.push() : colocar novo elemento no final do array, retorna o tamanho do array 
    arr.push( { carro: 'BMW' } ) -> 6

    arr.push( function soma(x, y){
        return x + y;
    } ); -> 7

    arr[6](1, 3) -> 4;

    Estrutura de Repetição For
    for( init, condition, final-expression );

    for( var num = 0; num < 20; num++ ){
        console.log( num );
    }

    for( var num = 2, a = 10; num < a; num++){
        console.log( num );
    }
*/