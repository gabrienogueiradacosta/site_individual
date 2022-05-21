var nomeVar = "";
var cnpjVar = "";
var emailVar = "";
var senhaVar = "";
var confirmarVar = "";

//Validação e-mail
function verificar_mail() {
    emailVar = input_email.value.trim();

    if (emailVar.indexOf("@") > 3 && (emailVar.endsWith(".com.br") || emailVar.endsWith(".com") ||
        emailVar.endsWith(".ind.br") || emailVar.endsWith(".ind"))) {
        span_erro_email.innerHTML = "✓"
    }
    else {
        span_erro_email.innerHTML = '*Insira "@" e terminação .com, por exemplo'
    }
}

//Validação nome
function verificar_nome() {
    nomeVar = input_nome.value.trim();
    if (nomeVar.length < 5 ) {
        span_erro_nome.innerHTML = '*Digite no minímo 5 caracteres'
    }
    else {
        span_erro_nome.innerHTML = "✓"
    }
}

//Validação CNPJ
function verificar_telefone() {
    cnpjVar = Number(input_telefone.value.trim);

    if (cnpjVar.length > 13) {
        span_erro_telefone.innerHTML = '*Insira 14 digitos no CNPJ'
    }
    else {
        span_erro_telefone.innerHTML = "✓"
    }
}


//Validação senha
function verificar_senha() {
    senhaVar = input_senha.value.trim();

    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
    if (senhaVar.length < 8 || senhaVar.length == 0  ) {
        span_erro_senha.innerHTML = '*Insira 8 caracteres, 1 número, letra maiúscula, minúscula e 1 caractere especial'
    }
    else if (!regex.exec(senhaVar)) {
        span_erro_senha.innerHTML = '*Insira 8 caracteres, 1 número, letra maiúscula, minúscula e 1 caractere especial'
        return false
    }
    else {
        span_erro_senha.innerHTML = "✓"
    }
}

//Validação confirmação de senha
function verificar_confirmacao() {
    confirmarVar = input_confirmacao.value.trim();

    if (confirmarVar == '') {
        span_erro_confirmacao.innerHTML = '*Digite uma senha'
    }
    else if (confirmarVar != senhaVar || confirmarVar.length < 8) {
        span_erro_confirmacao.innerHTML = '*Senha diferente'
    }
    else {
        span_erro_confirmacao.innerHTML = "✓"
    }
}

// Enviando os valores das inputs
function cadastrar() {
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            cnpjServer: cnpjVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            confirmarServer: confirmarVar

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.location = "tela_login.html"

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}