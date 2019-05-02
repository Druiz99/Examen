var j1 = new Jugador();
var j2 = new Jugador();


document.getElementById('btn').addEventListener('click',function (){
    var nombre1 = prompt("Please player 1 enter your name")
    var nombre2 = prompt("Please player 2 enter your name")

    j1.nombre = nombre1
    j2.nombre = nombre2

    document.getElementById('imprime').innerHTML = `${nombre1 }` + j1.lanzar()
    document.getElementById('imprime').innerHTML = `${nombre2 }` + j2.lanzar()
})
