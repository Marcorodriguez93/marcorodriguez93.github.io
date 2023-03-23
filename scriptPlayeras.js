let btnPlyUno = document.getElementById("ply1");
let btnPlyDos = document.getElementById("ply2");
let cambiobtn = document.getElementById("cambioImagen");

btnPlyUno.onclick = function(){
    cambiobtn.src = "./imagenes/PlayeraSubli.jpeg";
}
btnPlyDos.onclick= function(){
    cambiobtn.src = "./imagenes/PlayeraVinil.jpeg";
}