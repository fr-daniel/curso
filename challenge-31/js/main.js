(function(){
  'use strict';
  
  var $div = document.querySelector('[data-js="main"]');

  console.log( typeof $div.innerHTML ); //getter

  //setter
  //$div.innerHTML = '<h2>Título 2</h2>'; //converte para HTML, altera todo o conteúdo da div
  //$div.innerHTML += '<h2>Título 2</h2>';

  //Com textContent
  //$div.textContent = '<h2>Título 2</h2>'; //não converte para HTML

  /*
  var $h2 = document.createElement('h2');
  $h2.textContent = 'Título 2';
  $div.appendChild( $h2 );
  */

  //console.log( Object.prototype.toString.call($div) );

  //Problemas de segurança do innerHTML
  var $textarea = document.querySelector('[data-js="textarea"]');
  var $form = document.querySelector('[data-js="form"]');

  $form.addEventListener( 'submit', function( e ){
    e.preventDefault();
    $div.innerHTML = $textarea.value;
  }, false );

  //insertAdjacentHTML( pos, text );
  //beforebegin - afterbegin
  //beforeend - afterend

  /*
    beforebegin
    <p>
    afterbegin
      texto
    beforeend
    <p>
    afterend
  */

  console.dir( $form );

  $form.insertAdjacentHTML( 'beforebegin', '<h1>Meu formulário</h1>' );
  $div.insertAdjacentHTML( 'afterend', '<h2>Fim da DIV</h2>');

  //$form.outerHTML : representação em string do objeto HTML
  $div.insertAdjacentHTML( 'afterbegin', $form.outerHTML );
})();
