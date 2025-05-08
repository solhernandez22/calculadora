

const dado = document.getElementById('dado');
dado.addEventListener(
    'click', () => {
        let num= Math.floor(Math.random()*6)+1
        document.getElementById("resultadodado").textContent = num;
    }
    
)


const moneda = document.getElementById('moneda');
    moneda.addEventListener(
        'click', () =>{
            const resultado = Math.random()<
            0.5 ? "cara" : "cruz";
            document.getElementById("resultado").textContent = resultado;
}
)






export class Auto{
    constructor(color,marca,modelo,año){
        this.color=color;
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
    }

    //atributos
    color;
    altura;
    ancho;
    marca;
    modelo;
    año;
    velocidad=0;
    VelocidadMaxima=100;

    //metodos
    arrancar(){
        console.log("el auto esta arrancando")
    }
    
    acelerar(){
        this.velocidad+=15;
        if(this.velocidad>this.VelocidadMaxima) this.velocidad=this.VelocidadMaxima
        console.log("el auto "+this.modelo+" "+this.marca+ " esta acelerando, la velocidad subio a :"+this.velocidad)
    }
    frenar(){
        this.velocidad-=10;
        console.log("el auto esta frenando, la velocidad bajo a: " +this.velocidad)
    }
    bocina(){
        console.log("beep beep")
    }
    apagar(){
        console.log("el auto "+this.modelo+" "+this.marca+ " se esta apagando")
    }
    girarIzquierda(){
        console.log("el auto gira a la izquierda")
    }
    girarDerecha(){
        console.log("el auto gira a la derecha")
    }
    imprimir(){
        console.log("el auto es " + this.color+ " "+this.modelo+" "+this.marca+ " "+this.año+" y su velocidad es de " + this.VelocidadMaxima+ "km/h");
    }

}
