// 1
console.log('Hello world')
let hello = 'Hello world'
console.log(hello)

// 2
function incrementar() {
    let resultado = document.getElementById("resultado")
    let res = parseInt(resultado.innerHTML)

    if (isNaN(res) === false) {
        resultado.innerHTML = res + 1
    }
}

// 3
function somar() {
    let valor1 = document.getElementById("valor1")
    let valor2 = document.getElementById("valor2")

    let soma = document.getElementById("soma")

    let v1 = parseFloat(valor1.value)
    let v2 = parseFloat(valor2.value)

    if (isNaN(v1) === false && isNaN(v2) === false) {
        soma.innerHTML = `Resultado ${v1 + v2}`
    } else {
        soma.innerHTML = "Valor inválido"
    }
}

// 4
function aleatorio() {
    let resultado = document.getElementById("resultado_aleatorio")

    resultado.innerHTML = `Resultado ${Math.floor(Math.random() * (1000 - 100) + 100)}`
}

// 5
function aleatorioComIntervalo() {
    let minimo = document.getElementById("minimo")
    let maximo = document.getElementById("maximo")

    let resultado = document.getElementById("resultado_aleatorio_com_intervalo")

    let min = parseFloat(minimo.value)
    let max = parseFloat(maximo.value)

    if (isNaN(min) === false && isNaN(max) === false) {
        resultado.innerHTML = `Resultado ${Math.floor(Math.random() * (max - min) + min)}`
    } else {
        resultado.innerHTML = "Valor inválido"
    }
}

// 7
let string = 'JOAO'
let numero = 1
let booleado = false
let array = []
let objeto = { nome: 'JOAO', idade: 12 }

function retornaTipo(variavel) {
    return typeof variavel
}

console.log(retornaTipo(string))
console.log(retornaTipo(numero))
console.log(retornaTipo(booleado))
console.log(retornaTipo(array))
console.log(retornaTipo(objeto))

// 8
function ehPrimo(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

function buscarPrimos() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let resultado = document.getElementById("resultado_numero_primo")

    let v1 = parseInt(inicio.value)
    let v2 = parseInt(fim.value)

    if (isNaN(v1) || isNaN(v2) || v1 > v2) {
        resultado.innerHTML = "Valor inválido"
        return
    }

    let primos = []
    for (let i = v1; i <= v2; i++) {
        if (ehPrimo(i)) {
            primos.push(i)
        }
    }

    resultado.innerHTML = primos.length > 0
        ? `Primos no intervalo: ${primos.join(", ")}`
        : "Nenhum número primo encontrado no intervalo"
}

// 9
function verificarPalindromo() {
    let palavra = document.getElementById("palavra").value.trim()
    let resultado = document.getElementById("resultado_palindromo")

    if (palavra === "") {
        resultado.innerHTML = "Por favor, digite uma palavra"
        return
    }

    let reverso = palavra.split('').reverse().join('')

    if (palavra === reverso) {
        resultado.innerHTML = `"${palavra}" é um palíndromo`
    } else {
        resultado.innerHTML = `"${palavra}" não é um palíndromo`
    }
}

// 10
function copiarTexto() {
    let texto = document.getElementById("texto").value.trim()
    let listagem = document.getElementById("listagem")
    if (texto === "") {
        alert("Informe um valor")
        return
    }

    let paragrafo = document.createElement("p")
    paragrafo.textContent = texto
    listagem.appendChild(paragrafo)

    texto.value = ""
}

// 11
let sorteados = []

function sortearNumero() {
    let numero = Math.floor(Math.random() * 101)
    sorteados.push(numero)

    atualizarLista()
}

function atualizarLista() {
    let lista = document.getElementById("lista_numeros")
    lista.innerHTML = ""

    sorteados.forEach((numero, index) => {
        let item = document.createElement("li")
        item.textContent = `${index + 1} > ${numero}`
        lista.appendChild(item)
    })
}

// 12
let historico = []

function sortearNumero2() {
    let inicio = document.getElementById("inicio2")
    let fim = document.getElementById("fim2")

    let v1 = parseInt(inicio.value)
    let v2 = parseInt(fim.value)

    if (isNaN(v1) || isNaN(v2) || v1 > v2) {
        alert("Informe um valor")
        return
    }

    let numero = Math.floor(Math.random() * (v2 - v1 + 1)) + v1

    let resultado = {
        intervalo: `[${v1} - ${v2}]`,
        numeroSorteado: numero
    }

    historico.push(resultado)

    atualizarLista2()
}

function atualizarLista2() {
    let lista = document.getElementById("listagem2")
    lista.innerHTML = ""

    historico.forEach((item, index) => {
        let elemento = document.createElement("li")
        elemento.textContent = `${index + 1} > Intervalo ${item.intervalo}: Número sorteado: ${item.numeroSorteado}`
        lista.appendChild(elemento)
    })
}

// 13
function mudarCor() {
    let cor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = cor
}

// 14
function gerarCorAleatoria() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

function atualizarCores() {
    let quadrados = document.querySelectorAll('.quadrado')
    quadrados.forEach(quadrado => {
        let cor = gerarCorAleatoria()
        quadrado.style.backgroundColor = cor
        quadrado.textContent = cor.toUpperCase()
    })
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault()
        atualizarCores()
    }
})
atualizarCores()

// 15
document.addEventListener('keydown', adicionaParagrafo);

function adicionaParagrafo(event) {
    let display = document.getElementById('display')
    let tecla = event.key

    let elemento = document.createElement('div')
    elemento.classList.add('key')
    elemento.textContent = `Tecla: ${tecla}`

    display.appendChild(elemento)
    display.scrollTop = display.scrollHeight
}