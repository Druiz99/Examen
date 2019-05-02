class Jugador {
    constructor(nombre, position){
        this.position = null
        this.nombre = nombre
    }
    set Nombre(valor) { this.nombre = valor }



    lanzar() {

        /*for (let i = 1; i < 100; i++) {

            var valor = Math.floor(Math.random() * (10 - 1) + 1);

            if (valor == 1 || valor == 2) {
                let valor = 1
                avanzar(valor)
            }
            if (valor == 3 || valor == 4) {
                let valor = -1
                avanzar(valor)
            }
            if (valor == 5 || valor == 6 || valor == 7 || valor == 8) {
                let valor = 2
                avanzar(valor)
            }
            if (valor == 3 || valor == 4) {
                let valor = 3
                avanzar(valor)
            }

            console.log(valor);
        }*/

        let i= 1;
        while (i<100) {

            var valor = Math.floor(Math.random() * (10 - 1) + 1);

            if (valor == 1 || valor == 2) {
                let valor = 1
                avanzar(valor)
            }
            if (valor == 3 || valor == 4) {
                let valor = -1
                avanzar(valor)
            }
            if (valor == 5 || valor == 6 || valor == 7 || valor == 8) {
                let valor = 2
                avanzar(valor)
            }
            if (valor == 3 || valor == 4) {
                let valor = 3
                avanzar(valor)
            }

            console.log(valor);
        }

    }

    avanzar(d) {
        this.position += d
    }

}