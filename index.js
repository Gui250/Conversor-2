document.querySelector('#converter').onclick = converterTemperatura; 
document.querySelector('#resetar').onclick = limpar; 




function converterTemperatura(){
    let kelvin = document.querySelector('#kelvin').value; 
    let celcius = document.querySelector('#celcius').value; 

    if(isNaN(kelvin) || isNaN(celcius) ){
      alert("Digite um valor válido!")
    }
    else if(kelvin === ''){
        kelvin = parseFloat(celcius) + 273
    }
    else if(celcius === ''){
     celcius = parseFloat(kelvin) - 273
    }

document.querySelector('#kelvin').value = parseFloat(kelvin).toFixed(0)
document.querySelector('#celcius').value = parseFloat(celcius).toFixed(0)

}







function limpar(){
    document.querySelector('#kelvin').value = ""; 
    document.querySelector('#celcius').value = "";
} 