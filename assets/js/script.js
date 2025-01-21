let txtc = document.getElementById('txtc')
let numero = document.getElementsByClassName('num')

function checarNum(num) {
    if (num == 0) {
        txtc.innerHTML += num
    } else if (num == 1) {
        txtc.innerHTML += num
    } else if (num == 2) {
        txtc.innerHTML += num
    } else if (num == 3) {
        txtc.innerHTML += num
    } else if (num == 4) {
        txtc.innerHTML += num
    } else if (num == 5) {
        txtc.innerHTML += num
    } else if (num == 6) {
        txtc.innerHTML += num
    } else if (num == 7) {
        txtc.innerHTML += num
    } else if (num == 8) {
        txtc.innerHTML += num
    } else {
        txtc.innerHTML += num
    }
}

function checarOper(operacao) {
    if (operacao == '+') {
        txtc.innerHTML += operacao
    } else if (operacao == '-') {
        txtc.innerHTML += operacao
    } else if (operacao == '÷') {
        txtc.innerHTML += operacao
    } else {
        txtc.innerHTML += operacao
    }
}

function ponto() {
    txtc.innerHTML += '.'
}

function resetar() {
    txtc.innerHTML = ''
}

function igual() {
    if (txtc.innerText.length == 0) {
        alert('[ERRO]')
    } else {
        let calculo = eval(txtc.innerText)
        txtc.innerText = calculo
    }
}