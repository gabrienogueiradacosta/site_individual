function cadastrar_voto(voto) {
    var voto_personagem = voto

    fetch("/usuarios/cadastrar_voto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            voto_personagemServer: voto_personagem,
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {


            setTimeout(() => {
                window.location = "dashboard.html";
            }, "2000")



        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}

var imagens = [
    'imgs/procurado_luffy.jpg',
    'imgs/procurado_zoro.jpg',
    'imgs/procurada_nami.jpg',
    'imgs/god_usopp.jpg',
    'imgs/procurado_sanji.jpg',
    'imgs/procurado_chopper.jpg',
    'imgs/procurada_robin.jpg',
    'imgs/foranky.jpg',
    'imgs/procurado_brook.jpg',
    'imgs/jinbe.jpg',
];


function trocaBackground() {
    var img = Math.floor(Math.random() * imagens.length);
    document.getElementById('body_img').style.backgroundImage = "url(" + imagens[img] + ")";

    console.log(imagens[img]);
}

setInterval(trocaBackground, 3000)

function inicio(){
    window.location = "./index.html";
}
  