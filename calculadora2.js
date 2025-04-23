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

function alCuadrado(){
    numeroAnterior=numeroActual;
    document.getElementById("num").innerHTML = Number(numeroAnterior)*Number(numeroActual);
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

function punto(){
numeroActual=numeroAnterior


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








/*






if(op==0){
    document.getElementById("num").innerHTML = Number(numeroAnterior)+Number(numeroActual);
}

if(op==1){
    document.getElementById("num").innerHTML = Number(numeroAnterior)-Number(numeroActual);
}

if(op==2){
    document.getElementById("num").innerHTML = Number(numeroAnterior)*Number(numeroActual);
}

if(op==3){
    document.getElementById("num").innerHTML = Number(numeroAnterior)/Number(numeroActual);
}
*/
