(function(){
    /*
        this
        - Em métodos de Objetos: faz referência ao objeto principal
    */
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
        }
    }
    console.log( myObject.init() );

    /* myObject.init = function init(){
        return this.myProperty;
    }
    console.log( myObject.init() ); */

    /*
        - Em Funções: pode ter dois valoes
          1º: referência ao objeto global
    */
    function myFunction(){
        return this;
    }

    console.log( 'myFunction:', myFunction() === window, myFunction() );
    console.log( 'myObject:', myObject.init() === window, myObject.init() );

    function MyConstructor(){
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }

    var constructor = new MyConstructor();
    console.log( 'MyConstructor:', constructor.prop1 );
    console.log( MyConstructor() );
    console.log( prop1 );

    //Objeto: arguments
    function myFunction2(){
        //return arguments[ 0 ];
        return arguments;
    }
    console.log( myFunction2( 2, 3 ) );
})();