document.querySelector('#converter').onclick = temperatura; 
document.querySelector('#limpar').onclick = clear; 


function temperatura(){
    let farenheit = document.querySelector('#farenheit').value; 
    let celcius = document.querySelector('#celcius').value; 


if(isNaN(farenheit) || isNaN(celcius)){
    alert("Digite um valor válido")
}

else if(farenheit === ''){
    farenheit = (parseFloat(celcius) * 1.8) + 32; 
}
else if(celcius === ''){
     celcius = (parseFloat(farenheit) - 32) / 1.8
}


document.querySelector('#farenheit').value = parseFloat(farenheit).toFixed(1);
document.querySelector('#celcius').value = parseFloat(celcius).toFixed(1);


}



function clear(){ 
document.querySelector('#farenheit').value = ""
document.querySelector('#celcius').value = ""
}



