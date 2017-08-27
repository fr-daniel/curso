/*
    Tipos de dados:
    -Tipos Primitivos: 
        number -- número qualquer, decimal, inteiro e etc.
        string -- qualquer coisa escrita envolto por "" ou '' 
        boolean -- valor true ou false
        null -- definido pelo desenvolvedor
        undefined -- valor não passado ou inexistente
    -Tipos de Objetos:
        *Todos os outros
        Conjunto de propriedades: devem receber uma propriedade e valor;
        valor: primitivo ou outro objeto
*/

var objeto = {
    propriedade: 'valor',
    propriedade2: 10,
    propriedade3: true
}

objeto.propriedade;

var pessoa = { nome: 'Daniel', idade: 19, peso: 78, altura: 1.65 };
pessoa.nome;
pessoa.idade;
pessoa.peso;
pessoa.altura;

var carro = {
    cor: 'vermelhor',
    motor: '2.0',
    portas: 4
}

carro.cor;
carro.motor;
carro.portas;

/* Função é um tipo de objeto de primeira classe e 
podem ser atribuidas a variáveis */

var myVar = function(){
    return 'Variável myVar';
}

myVar();

//Criando métodos de Objetos
var pessoa = {
    nome: 'Daniel',
    idade: 19,
    altura: 1.67,
    peso: 70
}

pessoa = { sexo: masculino }; //Perdemos o dados que já estavam armazenados na variável

var pessoa = {
    nome: 'Daniel',
    idade: 19,
    altura: 1.67,
    peso: 70
}

//Atribuindo uma nova propriedade a um objeto
pessoa.cor = 'negro';

//Atribuindo um novo método a um objeto
pessoa.andar = function(){
    return 'Pessoa andando!';
}

pessoa.idade;

pessoa.aniversario = function(){
    pessoa.idade++;
}

pessoa.sobrenome = 'Lima';

pessoa.nomeCompleto = function(){
    return pessoa.nome + ' ' + pessoa.sobrenome;
}
