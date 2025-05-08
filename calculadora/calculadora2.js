let numeroActual="";
let numeroAnterior="";
let op=0;




function mostrar(numero){
    numeroActual+=numero;
    document.getElementById("num").innerHTML = numeroActual;
}

function sumar(){
    numeroAnterior=numeroActual;
    document.getElementById("chiquito").innerHTML = numeroActual+"+";
    numeroActual="";
    op=0;
}


function restar(){
numeroAnterior=numeroActual;
document.getElementById("chiquito").innerHTML = numeroActual+"-";
    numeroActual="";
    op=1;
}



function multiplicar(){
    numeroAnterior=numeroActual;
    document.getElementById("chiquito").innerHTML = numeroActual+"x";
        numeroActual="";
        op=2;
}

function alCuadrado() {
    numeroActual = Number(numeroActual) ** 2;
    document.getElementById("num").innerHTML = numeroActual;
}

function porcentaje() {
    numeroActual = (Number(numeroAnterior) * Number(numeroActual)) / 100;
    document.getElementById("num").innerHTML = numeroActual;
}


function dividir(){
    numeroAnterior=numeroActual;
    document.getElementById("chiquito").innerHTML = numeroActual+"÷";
        numeroActual="";
        op=3;
}

function borrar(){
    numeroActual="";
    document.getElementById("num").innerHTML="0"
}

function borrarUltimo(){
    numeroActual=numeroActual.slice(0,-1);
    document.getElementById("num").innerHTML = numeroActual;
    
}
function borrarC(){
    numeroActual="";
    document.getElementById("num").innerHTML="0"
}

function coma() {
    if (!numeroActual.includes(".")) {
        numeroActual += ",";
        document.getElementById("num").innerHTML = numeroActual;
    }
}

function igual(){
    document.getElementById("chiquito").innerHTML =""; 

    switch(op){
    
        case 0:
                numeroActual=Number(numeroAnterior)+Number(numeroActual);
            break;
        case 1:
                numeroActual = Number(numeroAnterior)-Number(numeroActual);
            break;
        case 2:
                numeroActual = Number(numeroAnterior)*Number(numeroActual);
            break;
        case 3:
                numeroActual==0 ? numeroActual="No se puede dividir por 0"  
            :numeroActual = Number(numeroAnterior)/Number(numeroActual);
            break;
        
        default:
    }

    document.getElementById("num").innerHTML =numeroActual; 
}    



























/*let array =["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let arrayvacio =[];

while(array.length>0){
    arrayvacio.push(array.pop());
console.log(arrayvacio);
}

alert(arrayvacio);*/


/* imprime los numeros pares del 0 al 1000*/

/*for(let i=0; i<500; i++){
    
        console.log(i*2);
    }

    /* suma todos los numeros*/
/*let suma=0;
for(let i=0; i<=1000; i+=2)
{
    suma+=i;
    console.log(suma);
}*/


/*let palos=[ "oro", 
    "basto",
    "copa", 
    "espada"]

    for(let carta in palos){
        for(let i=1; i<=12; i++){
            console.log(i+" de "+ palos[Number(carta)])
        }
    }*/





    let array = ["Oro", "Copa", "Basto", "Espada"];
    console.log("Inicio:", array.join(", "));

        for(let i = 1; i<array.length; i++){
            let valorActual = array[i];
            let j = i - 1;

        while(j>= 0 && array[j].localeCompare(valorActual)> 0)
    
            { array[ j + 1] = array[j];
            j--;
    }
    array[j + 1] = valorActual;

    console.log(`paso ${i}:`, array.join(", "));
        }
console.log("Orden final:", array.join(", "));




for(let i = 1; i<= 100; i++){
    if(i % 2 === 0){
        console.log(i + " es par");
    } else {
        console.log(i + " es impar")
    }
}

function busquedaBinaria(array, objetivo){
let izquierda = 0;
let derecha = array.length - 1;
let paso = 1;

while ( izquierda <= derecha) {
let medio = Math.floor((izquierda + derecha) / 2);
let valorMedio = array[medio];

console.log(`paso ${paso++}: izquierda=${izquierda}, derecha=${derecha}, medio=${medio}, valor=${valorMedio}`);

if (valorMedio === objetivo) {
    console.log(`El número ${objetivo} esta en la posicion ${medio}`);
    return medio; } 
        else if (valorMedio < objetivo) { izquierda = medio + 1;} 
        else {derecha = medio - 1;}
}
console.log(`el numero ${objetivo} no esta en el array`);
    return -1;
}

let numeros =[];
for (let i = 1; i <= 100; i++){
numeros.push(i);
}

busquedaBinaria(numeros, 47);





// Definimos como es un nodo del arbol
class nodo {
constructor(valor) {
this.valor = valor;
this.izquierda = null;
this.iderecha = null;
    }
}

//creamos la clase
class ArbolBinario {
constructor() {
    this.raiz = null;
}

//como insertar un numero
insertar(valor){
    console.log (`insertando ${valor}...`);
    const nuevoNodo = new nodo(valor);

    if(!this.raiz) {
        this.raiz = nuevoNodo;
        console.log(`->${valor}es la raiz del arbol`);
    return;
    }

    let actual = this.raiz;
    while(true){
        console.log(`Comparando con ${actual.valor}...`);
        if (valor<actual.valor) {
            console.log(`${valor} es menor que ${actual.valor}, vamos a la izquierda `);
            //ir a la izquierda
            if(!actual.izquierda){
                actual.izquierda = nuevoNodo;
                console.log(`Insertando ${valor}a la izquierda de ${actual.valor}`);
                return;
            }
            actual = actual.izquierda;
        } else {
            console.log(`${valor} es mayor o igual que $ {actual.valor}, vamos a la derecha`);
            //ir a la derecha
            if(!actual.derecha){
                actual.derecha = nuevoNodo;
                console.log(`-> Insertando ${valor} a la derecha de ${actual.valor}`);
                return;
            }
            actual = actual.derecha
        }
    }
}
//metodo para buscar un numero
buscar(valor){
    console.log(`\nBuscando ${valor} en el arbol...`);
    let actual = this.raiz;
    while (actual){

        if(valor===actual.valor)return true;
        if(valor<actual.valor){
            actual = actual.izquierda;
        } else{
            actual = actual.derecha;
        }
    }
    return false;
    }
}

//creamos el arbol y agregamos numeros
const arbol = new ArbolBinario();
arbol.insertar(8);
arbol.insertar(3);
arbol.insertar(10);
arbol.insertar(1);
arbol.insertar(6);
//buscamos un numero
console.log(arbol.buscar(6));
console.log(arbol.buscar(7));











const div = document.createElement('div');
const p = document.createElement('p');
p.textContent= "tengo sueño";
div.textContent = "chauchis ";
div.append(p);
document.body.append(div)
div.style.fontFamily = "cursive";
div.style.backgroundColor = "purple";
div.style.color = "white";



