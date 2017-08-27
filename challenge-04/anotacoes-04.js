/*
    Valores Falsy no JS:
        - undefined
        - NaN
        - null
        - 0
        - -0
        - '' ou ""
        - false
    Valores Truthy
        - Todos os valores diferentes dos anteriores.

    Descobrir a representação booleana de um valor:
         !!NaN -> false
         !!undefined -> false
         !!1 -> true

    Condicional Ternário
        condição ? true : false;
        Ex: 1 === 2 ? true : false;
        var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o';

    Escopo de variáveis e funções
        var myVar = 1;
        function myFunction(){
            myVar = 2;
            return myVar; //é possível
        }

        function otherFunction(){
            var otherVar = true;
            return otherVar;
        }

        otherFunction();
        otherVar; //erro, não foi definida no escopo global

        Sempre utilizar 'var';
            Criar variável sem utilizar o 'var' em funções, torna a variável acessível globalmente após a função ser chamada. 

        function newFunction(){
            newVar = 'teste'; //não deve ser criada sem o var
            return 'teste';
        }

        newFunction();
        newVar; //é possível

        
*/