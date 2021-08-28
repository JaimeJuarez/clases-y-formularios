document.getElementById("btn2").addEventListener("click", function agregar() {
    var caja1 = document.getElementById("caja1").value;
    var caja2 = document.getElementById("caja2").value;
    var cajaprint1 = document.getElementById("resultbox1");
    var cajaprint2 = document.getElementById("resultbox2");
    cajaprint1.innerHTML = '';
    cajaprint2.innerHTML = '';
    class punto {
        constructor() {
            this.x1;
            this.y1;
            this.x2;
            this.y2;
        }
        calcularDistancia(a, b) {
            this.splitCordinadas(a, b);
            console.log(this.x1, this.y1, this.x2, this.y2);
            let squarex = Math.pow(this.x2 - this.x1, 2);
            let squarey = Math.pow(this.y2 - this.y1, 2);
            let distancia = Math.sqrt(squarex + squarey);
            return distancia;
        }
        splitCordinadas(a, b) {
            let cor1 = a.split([","]);
            let cor2 = b.split([","]);
            this.x1 = parseInt(cor1[0]);
            this.x2 = parseInt(cor2[0]);
            this.y1 = parseInt(cor1[1]);
            this.y2 = parseInt(cor2[1]);
            // console.log(cor1[0]);
            // console.log(typeof cor1[0]);
        }
    }


    const p1 = new punto();
    var distancia = p1.calcularDistancia(caja1, caja2);
    cajaprint1.innerHTML = "El Primer punto es: (" + p1.x1 + "," + p1.y1 + ") " + "El Segundo Punto es: (" + p1.x2 + ", " + p1.y2 + ")";
    cajaprint2.innerHTML = "La distancia entre los puntos es: " + distancia;
})