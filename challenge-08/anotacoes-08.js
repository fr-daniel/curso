/*
    // SEMPRE NOMEAR
    Ao invés disso:
    var func = function(){
        
    };

    Prefira isso:
    var func = function func(){

    };

    -->Facilita o Debug e Consegue obter o nome

    var func =  function(){
        retrurn 'Hi';
    };

    func(); -> 'Hi'
    func.name; -> ''

    Functional Programming
    -> São objetos de primeia classe

    //Podemos retornar Objetos
    //Podemos retornar Funções

    function adder(x){
        function addOther(y){
            return x + y;
        }
        return addOther;
    }

    var teste = adder(2); //recebe uma função
    var result = teste(3); -> 5

    adder(2)(3); -> 5

    //Objetos por parâmetros
    var car = {
        color: 'yellow'
    }

    function getCarColor( mycar ){
        return mycar.color;
    }

    getCarColor( car ); -> 'yellow';

    Funções por parâmetro

    function showOtherFunction(func){
        return func();
    }

    showOtherFunction(function(){
        return 'Functional JS Ninja';
    }); 
    -> 'Functional JS Ninja'


*/