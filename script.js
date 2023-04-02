var fecha = new Date();
//var hola = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});




function nekoFunjatta(){

    alert("Neko funjatta")
    
}

fechaActual = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`

    //alert(fechaActual);
 document.getElementById('fecha').innerHTML = fechaActual