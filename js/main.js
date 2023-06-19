const controles = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = document.querySelectorAll('[data-peca]')
const valores = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
for (let controle of controles) {
    controle.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode.querySelector("[data-contador]"))
        atualizaEstatisticas()
    })
}
function manipulaDados(acao, peca) {
    let value = Number(peca.value)
    if (acao === '+')
        value++
    else
        if (value > 0)
            value--
    peca.value = value.toString().padStart(2, "0")
}
function atualizaEstatisticas() {
    for (estatistica of estatisticas) {
        estatistica.textContent = 0
    }
    for (let peca of pecas) {
        for (estatistica of estatisticas) {
            let value = Number(estatistica.textContent)
            value += valores[peca.dataset.peca][estatistica.dataset.estatistica] * Number(peca.value)
            estatistica.textContent = value
        }
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
const nameUser = prompt("Qual seu nome?").trim().replaceAll(" ", "").toUpperCase()
const tituloRobo = document.querySelector(".robotron .titulo")
if (nameUser !== "")
    tituloRobo.innerHTML = nameUser + "TRON <br>" + getRandomInt(1900, 2024)

