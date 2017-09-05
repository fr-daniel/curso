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
console.log( arr.slice( 2, 4 ) ); 