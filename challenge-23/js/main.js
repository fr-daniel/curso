(function(){
    'use strict';

/*     function sum(){
        //debugger;
        return Array.prototype.reduce.call( arguments, function( acumulado, atual ){
            return acumulado + atual;
        });
    }

    console.log( sum( 1, 34, 4 ) ); */
   
/*     console.time( 'calculando tempo o for' );

    for( var i = 0; i < 1000; i++ ){
        console.log( 'calculando...' );
    }

    console.timeEnd( 'calculando tempo o for' ); */

    var arr = [ 
        { item: 'Arroz', preco: 5, desconto: 5, precoDesconto: function(){
           return this.preco - ( this.preco * ( this.desconto / 100 )); 
        } },
        { item: 'Feijão', preco: 7, desconto: 20 },
        { item: 'Macarrão', preco: 2.5, desconto: 0 },
        { item: 'Carne', preco: 15, desconto: 10 }
    ];

    console.table( arr );
    
    console.log( arr[0].precoDesconto() );
})();