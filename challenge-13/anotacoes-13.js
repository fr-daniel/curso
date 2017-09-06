/*
    Arrays são objetos no javascript
    Possuem propriedades e métodos
    Array.length
    Array.sort()
    Array.join( '' )
    Array.push( valor )
    Array.pop()
    Array.reverse()
    Array.toString()
    Array.concat( valores )
    Array.unshit( valor )
    Array.shift()

*/

var arr = [ 1, 2, 3 ];
console.log( arr.length );
console.log( arr.push( 4 ) );

var obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log( obj.toString() ); //object

console.log( arr.toString() ); //retorna uma string
console.log( arr.join( ' ' ) ); //retorna uma string, mas é possível passar um parâmetro


//Método concat
console.log( arr.concat( 5, 6 ) ); //cria um array com os novos valoes e não modifica o array principal
console.log( arr.concat( [ 5, 6, 7 ], [ 8, 9, 10, 11 ] ) );

//Método unshift
console.log( arr.unshift( 0 ) ); //adiciona item no inicio do array e retorna o length
console.log( arr.unshift( -1 ) );
//Método shift
console.log( arr.shift() ); //remove item do inicio da array e retorna o item

//Método slice -> slice( inicio, fim ), slice( inicio )
console.log( arr.slice( 2 ) ); //não modifica o array principal
console.log( arr.slice( 2, 4 ) ); //não retorna o segundo indice
console.log( arr.slice( 0 ) );
console.log( arr.slice( -2 ) );

//Metodo splice -> Modifica o array principal, adiciona e remove elementos
console.log( arr.splice( 3 ) ); //remove os elementos a partir do indice 3 e os retorna
console.log( arr.splice( 1, 3 ) ); //parâmetros: indice e quantidades de itens para remover
console.log( arr.splice( 1, 0, '1' ) ); //adiciona elemento a partir do incide do primeiro parâmetro
console.log( arr.splice( 1, 0, 'a', 'b', 'c') ); 

//Método forEach()
var arr = [ 1, 2, 3, 4, 5 ];

arr.forEach(function( item, index, arr ){
    console.log( item, index, arr );
});

var sum = 0;
arr.forEach(function( item ){
    console.log( item );
    sum += item;
});

console.log( sum );

//Método every
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];

arr.every(function( item ){
    return item < 5;
}); //Verifica se todos os itens são menores que 5, retorna verdadeiro ou falso

//Método some
arr.some(function( item ){
    return item % 2 === 0;
}); //Verifica se pelo menos um item atende a condição, retorna verdadeiro ou falso


//Método map
var newArray = arr.map(function( item, index, array ){
    return item * 2;
}); //retorna um novo array, não modifica o array principal

//Método filter 
var filter = arr.filter(function( item, index, array ){
    return item > 2;
}); //retorna array com os itens que atendem a condição

var arr = [ 1, 2, 3, 4, 5 ,6 ];
var mapFilter = arr.map(function( item, index, array ){
    return item + 10;
}).filter(function( item ){
    return item > 13;
});