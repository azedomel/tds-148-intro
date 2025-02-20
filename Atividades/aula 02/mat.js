function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
    return res
}

function sub(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resSub")
    res.innerHTML = numero1 - numero2
    return resSub
}

function mult(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resMult")
    res.innerHTML = numero1 * numero2
    return resMult
}

function div(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resDiv")
    res.innerHTML = numero1 / numero2
    return resDiv
}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res = (m1 + m2 + m3 + m4 + m5) / 5 
    
    if(res >= 7){
        media.textContent = res
        msg.textContent = "Passou!"
        msg.style.color = "green"
    } else {
        media.textContent = res
        msg.textContent = "Reprovou!"
        msg.style.color = "red"
    }
}

    function IMC(){
        var peso = parseFloat(document.getElementById("peso").value)
        var altura = parseFloat(document.getElementById("altura").value)
        var resPeso = document.getElementById("resPeso")
        var msgIMC = document.getElementById("msgIMC")
        var res = ((altura*altura) / peso).toFixed(2)
        resPeso.innerHTML = res
        res = parseFloat(res)

        if(isNaN(peso) || isNaN(altura)){
            resPeso.textContent = "Digite apenas números!"
            document.getElementById("msgIMC").textContent = " "
            return
        }

        if(res >= 40.0){
            resPeso.textContent = res
            msgIMC.textContent = "Obesidade grau III"
        }
        else if(res <= 39.9 && res >= 35.0){
            resPeso.textContent = res
            msgIMC.textContent = "Obesidade grau II"
        }
        else if(res <= 34.9 && res >= 30.0){
            resPeso.textContent = res
            msg.textContent = "Obesidade grau I"
        }
        else if(res <= 29.9 && res >= 25.0){
            resPeso.textContent = res
            msgIMC.textContent = "Sobrepreso"
        }
        else if(res <= 24.9 && res >= 18.6) {
            resPeso.textContent = res
            msgIMC.textContent = "Normal"
        }
        else if(res <= 18.5){
            resPeso.textContent = res
            msgIMC.textContent = "Abaixo do normal"
        }
        else{
        }
    }

    function verif(){
        var ano = parseFloat(document.getElementById("ano").value)
        var resIdade = document.getElementById("resIdade")
        var msgIdade = document.getElementById("msgIdade")
        const thisYear = new Date().getFullYear();
        console.log(thisYear)
        var res = thisYear - ano
        
        
        if(isNaN(ano)){
            res.textContent = "Digite apenas números!"
            res.style.color = "red"
            return
        }

    if(res >= 18){
        resIdade.textContent = res
        msgIdade.textContent = "Permitida a entrada"
    }
    else{
        resIdade.textContent = res
        msgIdade.textContent = "Entrada negada"
    }
    }