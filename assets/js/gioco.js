
/*start delle funzioni*/

    /*funzioni per giochino esperienza*/
    
/*varibilli*/

    var esperienza = 0; //variabile che stampa i esperienza settata sempre a zero
    var valoreclick = 0;
    var tempo = 1000;
    var poteretempo = 0;
    var pot1 = 0;
    var pot2 = 0;
    var pot3 = 0;
    var i=0;
    var creazionemattoni=0;
    var startcostopot2 = 0;
/*funzione click di base*/
       
function Clicker(number){
			esperienza = esperienza + number + valoreclick; //esperienza + mouse click
			document.getElementById("esperienza").innerHTML = prettify(esperienza);
};

/*funzione potenziaclick + 1*/
 
function buypot1(){
    var costopot1 = Math.floor(10 * Math.pow(3,pot1));
       if (esperienza >= costopot1) {
       pot1 = pot1 + 1;
       valoreclick = valoreclick + 10;
       esperienza = esperienza - costopot1;
       document.getElementById('pot1').innerHTML = prettify(pot1);
       document.getElementById('esperienza').innerHTML = prettify(esperienza);
       
       
   }
       var nextCost = Math.floor(10 * Math.pow(3,pot1));
    document.getElementById('costopot1').innerHTML = nextCost;
};


/* funzione auto esperienza livello base potenziamento 10*/
    
function buypot2(){
      /*Controlla se la variabile I = a zero*/
    var costopot2 = Math.floor(100 * Math.pow(3.1,pot2))  
      if (esperienza >= costopot2){
       pot2 = pot2 + 1;
       valoreclick = valoreclick + 100;
       esperienza = esperienza - costopot2;
       document.getElementById('pot2').innerHTML = prettify(pot2);
       document.getElementById('esperienza').innerHTML = prettify(esperienza);
       i = i+1;
      }
      var nextCost = Math.floor(100 * Math.pow(3.1,pot2));
    document.getElementById('costopot2').innerHTML = nextCost;
};

    /*funzione potenziatempo*/
   
function buypot3(){
      var costopot3 = Math.floor(1000 * Math.pow(3.2,pot3));
      if (esperienza >= costopot3){
       pot3 = pot3 + 1;
       creazionemattoni = pot3 * 20;        
       esperienza = esperienza - costopot3;
       document.getElementById('pot3').innerHTML = prettify(pot3);
       document.getElementById('esperienza').innerHTML = prettify(esperienza);

       window.setInterval(function(){
        Clicker(creazionemattoni-valoreclick);
      },tempo);

      };
      
    var nextcostopot3 = Math.floor(1000 * Math.pow(3.2,pot3));
    document.getElementById('costopot3').innerHTML = nextcostopot3;

};
  
 /* allinea valori*/

function prettify(input){
      var output = Math.round(input *1000000)/1000000;
      return output;
    };
  
  /* temporizzatore */

function temporizzatore(tempo){
  window.setInterval(function(){
    Clicker(creazionemattoni-valoreclick);
  },tempo);
};

