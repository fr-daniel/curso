/*
    Wrapper Objects
    
    Valores primitivos não são OBJETOS

    var name = 'Daniel';
    name.length; -> 6 

    Construtores (criam novos objetos)
    var name = new String('Daniel');
    var age = new Number(19);
    var ninja = new Boolean(false);

    name.valueOf(); retorna o valor literal

    Quando se cria uma variável de algum tipo e solicita algum método, o javascript
    envolve a variável em um objeto para que os métodos possam ser usados. Após o
    uso o javascript descarta o objeto.

    Converter Valores (sem o new):
    var op1 = String(10); -> '10'
    var op2 = Number('100'); -> 100
    var op3 = Boolean(0); -> false
    var op3 = Boolean({}); -: true

    Como testar tipos de Valores?
        typeof <operando>

    typeof null -> object  : erro de implementação

    Pode confiar?  Sim, somente para valores primitivos;

    function subtract( num1, num2 ){
        if( typeof num1 === 'number' && typeof num2 === 'number' ){
            return num1 - num2;
        }
        return 'Entre com dois números!';
    }

*/