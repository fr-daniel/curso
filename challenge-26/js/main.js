(function(){
  'use strict';

  ////Propriedades////
  /*
    element.parentNode : retorna o elemento pai
    element.childNodes : retorna um Array-like com os elementos filhos

    //Nestas propriedades o comment e o text também são tratados como nó
    element.firstChild : retorna o primeiro elemento filho
    element.lastChild : retorna o último elemento filho
    element.nextSibling : retorna o elemento irmão
    element.previousSibling : retorna o irmão anterior

    element.nodeType : retorna o tipo de nó
        -> Document = 9
           Element = 1
           Text = 3
           Comments = 8
           documentFragment = 11

    element.nodeValue : retorna o conteúdo textual do elemento
    element.nodeName : retorna o nome do nó
        -> EX: HEAD, #text, comment, BODY

    //Somente elementos HTML
    element.children : retorna um array-like com os elementos html filhos
    element.firstElementChild : retorna o primeiro elemento html filho
    element.lastElementChild : retorna o último elemento html filho
    element.nextElementSibling : retona o elemento html irmão
    element.previousElementSibling : retorna o elemento html irmão anterior
    element.childElementCount : retorna um count dos elementos html filhos

    */

   ////Métodos////
   /*
    element.hasAttribute( 'attributeName' ) : boolean, verifica se existe o atributo passado no parâmetro
    element.hasAttributes() : boolean, verifica se exite alguma atributo no elemento
    element.appendChild( child ) : adiciona um novo elemento filho no final do nó
      OBS: se o elemento já existir no DOM, ele é removido e adicionado no nó
    element.insertBefore( node, beforeWhon ) : insere o elemento do primeiro parâmetro antes do elemento do segundo parâmetro
      -> node = nó a ser inserido
         beforeWhon = antes de quem?
    element.cloneNode( boolean ) : clona o nó
    element.hasChildNodes() : boolean, verifica se existe algum nó filho
    element.removeChild( child ) : remove nó passado como parâmetro
    element.replaceChild( new, old ) : faz a troca

    $variavel = document.createTextNode( 'texto' );
    $newChild = document.createElement( 'p' );

    $newChild.appendChild( $variavel );
  */

  //Atributos
  /*
    Getter e Setter
      element.id : retorna o nome do id
      element.id = 'newId'
      element.className : retorna o nome da clase
      element.className = 'newClass'

    element.getAttribute('nameAttribute') : retorna o valor
    elemrnt.setAttribute('newAttribute', 'valor')
  */

})();