(function(){
    'use strict';
    /*
    var myName = 'Daniel Lima';
    //console.log( myName );  

    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    }

    console.log( obj.prop1.prop2.prop3 );

    with( obj.prop1.prop2.prop3 ){
        console.log( prop31, prop32, prop33 )
    }

    function Person( name, lastName, age ){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    console.log( Person( 'Daniel', 'Lima', 19 )); // Erro this === undefined
    console.log( new Person( 'Daniel', 'Lima', 19 ));

    
       // use strict
       // - é necessário usar o 'var'
        // - this === undefined
        // - delete funciona apenas para propriedades de um objeto
        // - nomes dos objetos devem ser diferentes
        // - nomes dos parametros de uma função deve ser diferente
    
    */

    //Objeto String
    //.length
    var nome = 'Daniel';
    console.log( nome.length );

    //charAt( index ) -> retorna o caractere do indice passado por parametro
    console.log( nome.charAt( 0 ) );
    console.log( nome[ 0 ] );

    //concat -> não modifica a string
    console.log( nome.concat( ' Lima', ' da' ) );
    console.log( nome + ' Lima' + ' da' );

    //indexOf( string, start ) & lastIndexOf( string, start );
    console.log( nome.indexOf( 'i' ) );
    console.log( nome.lastIndexOf( 'el' ) );

    //replace( string, newString )
    //não modifica a string
    //faz apenas uma fez
    console.log( 'Francisco Daniel'.replace( 'a', '@' ) );
    console.log( nome.replace( 'Da', 'PE' ));

    //slice( start, [end] );
    console.log( nome.slice( 3 ) );
    console.log( nome.slice( 0, 3 ) );

    //split() -> transforma string em array
    //não modifica a string principal
    console.log( 'Francisco Daniel Lima da Silva'.split('a') );
    console.log( 'Francisco Daniel Lima da Silva'.split('a').join('z') );

    //substring( start, [end] )
    console.log( nome.substring( 2, 5 ) );
    console.log( nome.substring( 3 ) );

    //toLowerCase - min
    //toUpperCase - mai
    console.log( 'Francisco Daniel Lima da Silva'.toLowerCase() );
    console.log( 'Francisco Daniel Lima da Silva'.toUpperCase() );
    console.log( 'daniel'.charAt(0).toUpperCase() + 'daniel'.substring( 1 ) );

    var nomes = 'francisco daniel lima da silva'.split(' ');
    var nomesC = nomes.map(function( element, indice ){
        if( element.length > 2 ){
         return element.charAt(0).toUpperCase() + element.slice(1);
        } else {
            return element;
        }
    }).join(' ');
    console.log( nomesC );

})();

//console.log(  myName );