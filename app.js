// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml 
// Refrigerante - 1000 ml por pessoa + 6 horas 1500 ml

let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("crianças");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado"); 

function calcular(){
let adultos = inputAdultos.value 
let crianca = inputCrianca.value
let duracao = inputDuracao.value
let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * crianca);
let qdtTotalCerveja = cervejaPP(duracao) * adultos 
let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * crianca);

resultado.innerHTML = `<p>${qdtTotalCarne}g de Carne </p>`;
resultado.innerHTML += `<p>${qdtTotalCerveja}ml de Cerveja </p>`;
resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebida</p>`;
}



function carnePP(duracao){

if(duracao >= 6){
return 650
}
else{
    return 400
}

}

function cervejaPP(duracao){
   
    
    if(duracao >= 6){
    return 2000
    }
    else{
        return 1200
    }
     }

function bebidasPP(duracao){
   if(duracao >= 6){
    return 1500
    }
    else{
        return 1000
    }
    
 }




