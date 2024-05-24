//traccia1Crea un oggetto persona con le seguenti caratteristiche:

//nome
//cognome
//eta'
//un metodo che permetta di salutare


//let Persona ={
   // nome:'Tania',
    //cognome:'Prete',
    //eta:'34',
    //salutare:()=>console.log('saluta'),

//}
//Persona.salutare();



//Traccia 2:

//Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

//mostrare tutti i contatti dell’agenda
//mostrare un singolo contatto
//eliminare un contatto dall’agenda
//aggiungere un nuovo contatto
//modificare un contatto esistente  
//Suggerimento:




//let rubrica = {

  //'contacts': [

     // {'nome': 'Nicola', 'telefono': '3331111111'},

    //  {'nome': 'Lorenzo', 'telefono': '3332222222'},

    //  {'nome': 'Paola', 'telefono': '3333333333'},

     // {'nome': 'Jenny', 'telefono': '3334444444'}

 // ],

  //...

//}


let agenda = {
    'contatti':[
        {'nome' : 'Tania','telefono' : '3657898526'},
        {'nome' : 'Romolo','telefono' : '36578966666626'},
        {'nome' : 'Mimmo','telefono' : '3657555558526'},
        {'nome' : 'Romina','telefono' : '3657888888826'},
        {'nome' : 'Marcello','telefono' : '55557898526'},
        
    ],
    mostracontatti :function(){
           // this.contatti.forEach((contatto)=>console.log(contatto))
        for(i=0;i<this.contatti.length;i++){
            console.log(`--${this.contatti[i].nome}:${this.contatti[i].telefono}`);
        }
    },
    singolocontatto:function(contatto){
        let indicecontatto = this.contatti.findIndex((contact)=>contact.nome==contatto)
        if (indicecontatto!= -1) {
            console.log(`-${this.contatti[indicecontatto].nome}:${this.contatti[indicecontatto].telefono}`);
        }else{
            console.log('contatto non presente');
        }
    },
    eliminacontatto:function(contatto){
        let indicecontatto = this.contatti.findIndex((contact)=>contact.nome==contatto)
        if (indicecontatto!= -1){
            this.contatti.splice(indicecontatto, 1)
        }else{
            console.log('il contatto non esiste');

        }
    },
        
}
agenda.mostracontatti();
agenda.singolocontatto('Romolo');
agenda.singolocontatto('Fede');
agenda.mostracontatti();
agenda.eliminacontatto('Marcello');
agenda.mostracontatti();







