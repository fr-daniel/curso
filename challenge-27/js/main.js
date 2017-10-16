(function( doc, win ){
    'use strict';

    function afterDomContentLoaded(){
        alert('After Dom Load');
        var fragment = doc.createDocumentFragment();
        var childP = doc.createElement('p');
        var textChildP = doc.createTextNode('Texto da tag P');
    
        childP.appendChild( textChildP );
        fragment.appendChild( childP );
    
        doc.body.appendChild( fragment );
    }

    function afterWindowLoaded(){
        alert('After Window Load');
    }

    doc.addEventListener( 'DOMContentLoaded', afterDomContentLoaded, false );
    win.addEventListener( 'load', afterWindowLoaded, false );
    
})( document, window );