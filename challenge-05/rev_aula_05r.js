/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var newArray = [ 3, 5, 7, 12, 4 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray( pArray ){
    return pArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( retornarArray( newArray )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function selectIndiceArray( pArray, indice ){
    return pArray[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayVariado = [ 1, false, undefined, 'daniel', {} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for( var i = 0; i < 5; i++ )
    console.log( selectIndiceArray( arrayVariado, i ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String2
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( nomeBook ){
    var livros = {
        'Java': {
            quantidadePaginas: 132,
            autor: 'Daniel',
            editora: 'JavaBooks'
        },
        'CSS': {
            quantidadePaginas: 454,
            autor: 'Fr. Lima',
            editora: 'CssBooks'
        },
        'PHP and MySQL':{
            quantidade: 1032,
            autor: 'Lima Silva Fr.',
            editora: 'WebDev'
        }
    };
    return nomeBook !== undefined ? livros[nomeBook] : livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'Java';
console.log( 'O livro ' + livro + ' tem ' + book( livro ).quantidadePaginas + '!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
livro = 'CSS';
console.log( 'O autor do livro ' + livro + ' é ' + book( livro ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
livro = 'PHP and MySQL';
console.log( 'O livro ' + livro + ' foi publicado pela editoa ' + book( livro ).editora + '.' );