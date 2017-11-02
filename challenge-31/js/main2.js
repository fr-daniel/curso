(function(){
  'use strict';

  //Object Date
  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  var year = 2018;
  var month = 10;
  var day = 7;
  var hour = 10;
  var min = 23;
  var sec = 45;
  var milliseconds = 0;

  var date = new Date( year, month, day, hour, min, sec, milliseconds );

  console.log( months[ date.getMonth() ] );
  
  console.log( date );


  //Object Math : métodos static
  console.log( Math.PI );

  //Valor absoluto
  console.log( Math.abs( -3 ), Math.abs( 32 ), Math.abs( -34 ) );

  //Arredonda valor para cima
  console.log( Math.ceil( 3.1 ), Math.ceil( 4.6 ), Math.ceil( 5.4 ) );

  //Arredonda valor para baixo
  console.log( Math.floor( 9.8 ), Math.floor( 5.0 ), Math.floor( 22.1 ) );

  //Respeita a regra de arredondamento
  console.log( Math.round( 1.2 ), Math.round( 2.5 ), Math.round( 5.6 ) );

  //Raiz quadrada
  console.log( Math.sqrt( 9 ), Math.sqrt( 16 ), Math.sqrt( 5 ) );

  //Raiz cúbica
  console.log( Math.cbrt( 15 ), Math.cbrt( 34 ) );

  //Maior número e Menor número
  console.log( Math.max( 1, 3, 41, 1, 44, 1, 34, 64, 22 ) );
  console.log( Math.min( 32, 12, 3, 43, 1, 43 ) );

  console.log( Math.max.apply( this, [ 1, 4, 6,23, 42, 1, 41 ] ) );

  //Número aleatório entre 0 e 1 
  console.log( Math.random() );

})();

