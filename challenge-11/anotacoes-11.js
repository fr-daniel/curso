/*
    Laços
        do / while
*/
var counter = 11;

do {
    console.log( counter++ );
} while( counter <= 10 );

//-> 11

counter = 11;

while( counter <= 10 ){
    console.log( counter++ );
}

//Não entra

/*
    for in;
    percorrer propriedades de um objeto;
*/

var car = {
    brand: 'VW',
    model: 'Gol',
    year: 2017
}

//Mais lento que o for
for (var prop in car) {
    console.log( prop );
    console.log( car[prop] );
}

//Verificar se propriedade existe em um objeto
console.log( 'brand in car?', 'brand' in car );
console.log( 'doors in car?', 'doors' in car );

/*
    Saltos
*/

// return - usado em funções
// retorna o valor e salta todo o resto do código da função

// break - switch, for
// para a instrução

for( var i = 0; i <= 10; i++ ){
    if ( i === 5){
        break;
    }
    console.log( i );
}

// continue - 
// passa para a próxima condição 

console.log( 'Ex: continue' );

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for( var i = 0; i < arr.length; i++){
    if( arr[i] % 2 == 0 ){
        continue;
    }
    console.log( arr[i] );
}
