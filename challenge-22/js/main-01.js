/*
    Propriedades e métodos de funções:
        .name : nome da função|undefined
        .length : quantidade de parâmetros que podem ser recebidos
        .toString() : retorna a função em formato de string
        .call() : chamar a função
            .call( this, arg1, arg2, ..., argN )
        .apply()
        .prototype


*/

/* function myFunction( a, b, c, d ){
    return 'oi';
} 

console.log( myFunction.name );
console.log( myFunction.length );
console.log( myFunction.toString() );
console.log( myFunction.call() );


function myFunction2( a, b, c, d ){
    console.log( this.lastName, a, b, c, d );
}

var obj = {
    lastName: 'Lima'
};

var arr = [ 1, 2, 3, 4 ];
myFunction2.call( obj, arr );

myFunction2.apply( obj, arr ); */

function myFunction( name, lastName ){
    this.name = name;
    this.lastName = lastName;
    this.age = 30;
}

myFunction.prototype.fullName = function fullName(){
    return this.name + ' ' + this.lastName;
}

myFunction.prototype.age = 19;

var daniel = new myFunction( 'Daniel', 'Lima' );

console.log( daniel.fullName() );
console.log( daniel.age );

