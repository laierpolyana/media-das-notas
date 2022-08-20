function calculo() {

    let nota1 = parseFloat(document.getElementById("nota1").value) 
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)
  
    if(isNaN(nota1) || nota1 < 0) {
      nota1 = 0
    }
    
    if(isNaN(nota2) || nota2 < 0) {
      nota2 = 0
    }
    
    if(isNaN(nota3) || nota3 < 0) {
      nota3 = 0
    }
    
    if(isNaN(nota4) || nota4 < 0) {
      nota4 = 0 
    }
      
   let notaMedia = (nota1 + nota2 + nota3 + nota4) / 4
     
    let elementoMediadasNotasFinais = document.getElementById("MediadasNotasFinais")
    let resultadoMediaNota = "A sua média final é " + notaMedia.toFixed(1)
   
    
    elementoMediadasNotasFinais.innerHTML = resultadoMediaNota
    }
  