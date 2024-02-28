var puntos = 1000000
function dunction() {

    if (puntos == 0 ) {
        document.getElementById("k").innerHTML = "ganastee!!!!! felicidadess ahora intenta llegar a -1000000"
    }
     
    if (puntos == -1000000) {
        document.getElementById("o").innerHTML = "llegaste a -1000000 completaste el juego al 100%"
    }
    var dificult = document.getElementById("seleccionardifi").value
    if (dificult == "easy" ) {
        puntos -= 20
    }
    else if (dificult == "normal") {
        puntos -= 1
    }
    else if (dificult == "hard") {
        puntos -= 0.5
    }
   
    document.getElementById("hello").innerHTML = puntos
    
}
window.addEventListener("keydown", function entermalo(enter) {
    if ( enter.keyCode == "13" ) {
        enter.preventDefault()
    }
})