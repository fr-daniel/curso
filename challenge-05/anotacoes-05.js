/**
 * Retorno de Funções: Além do tipos primitivos
 * Array: []
 * function myFunction(){
 *      return [ 1, 2, 3 ];
 * }
 * myFunction()[0] -> 1
 * myFunction()[1] -> 2
 * 
 * Objetos: {}
 * function myFunction(){
 *      return {
 *          prop1: 1,
 *          prop2: 'daniel',
 *          prop3: function(){
 *                      return prop2; 
 *                 }    
 *      };
 * }
 * 
 * myFunction().pro1; -> 1;
 * var value = myFunction().prop2;
 * value -> 'daniel';
 * 
 */

 /*
    Parâmetros de Funções:
    Array: []
    var arr = [ 1, 2, 3 ];

    function myFunction(arg){
        return arg;
    }
    -> [ 1, 2, 3 ]

    function myFunction(arg){
        retrun arg[1];
    }
    -> 2

    Objetos: {}
    var obj = {
        nome: 'Daniel',
        idade: 19,
        cidade: 'Quixadá'
    }

    function myFunction(objeto){
        return objeto;
    }
    myFunction(obj);
    -> {
            nome: 'Daniel',
            idade: 19,
            cidade: 'Quixadá'
        }
    myFunction(obj).nome;
    -> 'Daniel';

    function myFunction2(objeto){
        return objeto.curso;
    }
    myFunction2();
    -> 'Daniel';

 */