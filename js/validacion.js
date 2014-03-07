function prueba()
{
    var nombre = $("#nombre").val();
    alert("Su nombre es:"+nombre);
    $("#contenido").html("<button onclick='salir();return false;'>salir</button>");
}

function salir()
{
    alert("Salir");
}