var divRecuperarConta = document.getElementById('recuperarconta')

var formLogin = document.getElementById('login')

var btnEsqueciSenha = document.getElementById('esquecisenha')

var btnVoltarLogin = document.getElementById('voltar')

var btnEnviar = document.getElementById('enviar')


btnEsqueciSenha.addEventListener('click', recuperarConta)
btnEnviar.addEventListener('click', permitirVoltar)
btnVoltarLogin.addEventListener('click', voltarLogin)


function recuperarConta() {
    formLogin.style.display = 'none'
    divRecuperarConta.style.display = 'flex'
}

function permitirVoltar() {
    btnVoltarLogin.style.zIndex = '0'
    document.getElementById('mensagemhaha').innerText = 'Enviado!'
}

function voltarLogin() {
    formLogin.style.display = 'flex'
    divRecuperarConta.style.display = 'none'
}