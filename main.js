/**Creare uno slider di immagini */

$(document).ready(function () {

    //CLICK AL MOUSE
    //Next
    $(".next").click(function () { 
        turn("next");
    });

    //Previous
    $(".prev").click(function () { 
        turn("prev");
    });


    //CLICK CON LA TASTIERA
    $(document).keydown(function (event) { 
        console.log(event.keyCode); 
        
        //Turn left
        if( event.keyCode == 37 ) {
            turn("prev");
        }
        //Turn right
        else if ( event.keyCode == 39 ){
            turn("next");
        }
    });

});


//Funzione scorrimento
function turn(direction) {

    //Variabili
    var activeImg = $(".images img.active");  //seleziono la classe active sulle img di images
    var activeCircle = $(".nav i.active");    //seleziono la classe active sulle i di nav
    

    //Reset: tolgo le classi per poi riassegnarle durante la funzione dedicata
    activeImg.removeClass("active");
    activeCircle.removeClass("active");


    //Next: riassegno le classi nel momento in cui col click attivo l'evento
    if(direction === "next") {

        if(activeImg.hasClass("last")) {   //con hasClass controllo se il mio elemento ha un nome di classe specificato.
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");

        } else {
            activeImg.next("img").addClass("active");
            activeCircle.next("i").addClass("active");
        }
    }

    //Previous: riassegno le classi nel momento in cui col click attivo l'evento
    else if(direction === "prev") {
        if(activeImg.hasClass("first")) {
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");
        
        } else {
            activeImg.prev("img").addClass("active");
            activeCircle.prev("i").addClass("active");
        }
    }
}