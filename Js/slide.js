var radioButtons = document.querySelectorAll('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 7000)

function nextImg() {
    cont++
    if (cont > 3) {
        cont = 1
    }
    document.getElementById('radio' + cont).checked = true
}

// Adiciona um Event Listener para cada botão de rádio
radioButtons.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        cont = index + 1 // Ajusta a contagem para corresponder ao botão clicado
    })
})
