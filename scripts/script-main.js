//sections
let main = document.querySelector('#main')
let func = document.querySelector('#funcionarios')
let relat = document.querySelector('#relatorios')

//buttons
let mainButton = document.getElementById('main-button')
let funcButton = document.getElementById('func-button')
let relatButton = document.getElementById('relat-button')

// events
mainButton.addEventListener('click', chamarMain)
func
funcButton.addEventListener('click', chamarFunc)
relatButton.addEventListener('click', chamarRelat)

// functions
// com certeza tem uma forma melhor de fazer isso mas pra um iniciante pelo menos tá funcionando
function chamarMain() {
    mainButton.style.backgroundColor = 'var(--cor-botao-discreto-clicado)'
    relatButton.style.backgroundColor = 'var(--cor-fundo-content)'
    funcButton.style.backgroundColor = 'var(--cor-fundo-content)'
    main.style.display = 'grid'
    func.style.display = 'none'
    relat.style.display = 'none'
}
function chamarRelat() {
    relatButton.style.backgroundColor = 'var(--cor-botao-discreto-clicado)'
    mainButton.style.backgroundColor = 'var(--cor-fundo-content)'
    funcButton.style.backgroundColor = 'var(--cor-fundo-content)'
    relat.style.display = 'grid'
    main.style.display = 'none'
    func.style.display = 'none'
}
function chamarFunc() {
    funcButton.style.backgroundColor = 'var(--cor-botao-discreto-clicado)'
    relatButton.style.backgroundColor = 'var(--cor-fundo-content)'
    mainButton.style.backgroundColor = 'var(--cor-fundo-content)'
    func.style.display = 'grid'
    relat.style.display = 'none'
    main.style.display = 'none'
}