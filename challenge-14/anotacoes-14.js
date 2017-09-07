//Método reduce
/*
    Não modifica o array principal
*/
var arr = [ 1, 2, 3, 4, 5 ];
var reduce = arr.reduce(function( acumulado, valorAtual, index, array ){
    return acumulado + valorAtual;
}, 0);

/*
    1º - 0 + 1 = 1
    2º - 1 + 2 = 3
    3º - 3 + 3 = 6
    4º - 6 + 4 = 10
    5º - 10 + 5 = 15
*/
console.log( reduce );

arr = [ 'D', 'a', 'n', 'i', 'e', 'l' ];

var reduce = arr.reduce(function( acumulado, valorAtual, index, array ){
    return acumulado + valorAtual;
}, 'Francisco ');

console.log( reduce );

//Método reduceRight
arr = [ 'D', 'a', 'n', 'i', 'e', 'l' ];

var reduce = arr.reduceRight(function( acumulado, valorAtual, index, array ){
    return acumulado + valorAtual;
});

console.log( reduce );

//Método indexOf
/*
    Retorna o indice do array
    -> -1 se não existir
    -> retorna o primeiro indice encontrado
*/
var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.indexOf(1) );
console.log( arr.indexOf(9) );

arr = [ 'D', 'a', 'n', 'i', 'e', 'a', 'l' ];
var inicioBusca = 2;
console.log( arr.indexOf( 'a', inicioBusca ) );

//lastIndexOf
/*
    Procura do final do array para o inicio
*/

console.log( arr.lastIndexOf('a') );

//isArray
console.log( Array.isArray( arr ) );
console.log( Array.isArray( { a: 'ola' } ) );