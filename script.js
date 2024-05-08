function gerartabuada(){
    var n = document.getElementById('n')
    var tabuada = document.getElementById('tabuada')
    
    if(n.value.length !=0){
        var numero = Number(n.value)
        var contador
        var resultado
        
        tabuada.innerHTML = ''
        for(contador=1; contador<=10; contador++){
            resultado = numero*contador
           var item = document.createElement('option')
           item.text = `${numero} X ${contador} = ${resultado}`
           item.value = `value ${contador}`
           tabuada.appendChild(item)
           

        }  


    }

    else{
        window.alert("Digite um número!")
    }

}