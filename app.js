
 //Recura la plantilla en formato string y guarda en la variable 
   let plantilla = $(".row").html();


    //elimina el contenido com la clase .row
  $('.row').html("");

     
 $.get("https://3a8i3.github.io/libros/", function(datos){
     	mostrarDatos( datos );
     	});

    function mostrarDatos(  d ){
    		console.log( d ); 
    
    	for(let i = 0; i< d.length; i++){
               let plantJQ = $(plantilla);

    		plantJQ.find(".titulo").text(d[i].titulo);
    		plantJQ.find(".anho").text(d[i].anho);
    	    plantJQ.find(".editorial").text(d[i].editorial);
    	    plantJQ.find(".resumen").text(d[i].resumen);
    	    plantJQ.find(".temas").text(d[i].temas);
    	    plantJQ.find(".portada").attr("src",d[i].portada);
    	    plantJQ.find(".foto").attr("src",d[i].autor.foto);
    	    plantJQ.find(".biografia-autor").attr("src",d[i].autor.biografia);
    	    plantJQ.find(".nombre-autor").attr("src",d[i].autor.nombre);
    	    plantJQ.find(".fecha-autor").attr("src",d[i].autor.nacimiento.fecha);
    	   plantJQ.find("ciudad-autor").text 
    	   







    		$(".row").append(plantJQ);
    	}
    }