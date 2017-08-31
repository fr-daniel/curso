/*
    Escopo de Funções
    function myFunction(){
        function sum(){
            return 1 + 2;
        }
        return 1 + 2;
    }
    
    myFunction(); -> 3
    sum(); -> //Reference Error

    fuction myFunction(){
        var num1 = 1;
        var num2 = 2;
        function sum(){
            return num1 + num2;
        }
        return sum();
    }
    -> 3 
    A função sum() consegue acessar as varoáveis da myFunction, mas não o contrario;

    Hoisting
    : elevação

    Quando se tem uma função literal o javascript move a função para cima, vale para todo 
    o escopo da função;

    Exemplo:
    function myFunction(){
        var num1 = 1;
        var num2 = 2;
        return sum();

        function sum(){
            return num1 + num2;
        }
    }

    Como o JavaScript executa:
     function myFunction(){
        function sum(){
            return num1 + num2;
        }

        var num1 = 1;
        var num2 = 2;

        return sum();
    }

    Erro de Hoisting:

    function myFunction(){
        var num1 = 1;
        var num2 = 2;

        return sum();

        var sum = function sum(){
            return num1 + num2;
        }
    }

    Como o JavaScript executa:

    function myFunction(){
        var num1 = 1;
        var num2 = 2;
        var sum = undefined;
        return sum();

        sum = function sum(){
            return num1 + num2;
        }
    }

    Funções estão disponíveis em todo os escopo da função;
    Variáveis estão disponíveis a partir do momento em que é declarada;

    function myFunction(){
        console.log('Antes de declarar ' + number1);
        var number1 = 10;
        console.log('Depois de declarar ' + number2);
    }

    -> 'Antes de declarar undefined'
        'Depois de declarar 10'    

    function myFunction(){
        console.log('Antes de declarar ' + number1);
        console.log('Número: ' + number2);
        var number1 = 10;
        console.log('Depois de declarar ' + number2);
    }

    function myFunction(){
        var number1;
        console.log('Antes de declarar ' + number1);
        console.log('Número: ' + number2);
        number1 = 10;
        console.log('Depois de declarar ' + number2);
    }

    ->Erro> number2 is not defined;

    --- Não é recomendado criar funções após o retorno;
    function myFunction(){
        var num1 = 1;
        var num2 = 2;
        function sum(){
            return num1 + num2;
        }
        return sum();
    }

    IIFF -  Immediately-Invoked Function Expression
    function sum(){
        return 1 + 2;
    }
    console.log( sum() );

    var sum2 = function(){
        return 5 + 3;
    }
    console.log( sum2() );
    
    var sum3 = function otherSum(){
        return 10 + 5;
    }
    console.log( sum3() ); -> 15
    
    console.log( otherSum() ) -> ReferenceError
        'otherSum' só existe no escopo de sum3;

    --Não é possível executar uma função literal no momento em que ela é definida;
    function sum(){
        return 1 + 1;
    }(); -> Error

    O método utilizado para executar as funções é torna-lá uma Expression;
    (function(){
        return 1 + 1;
    })();

    (function(){
        return 1 + 1;
    }());
    Termina de ler a função e a executa. 


*/