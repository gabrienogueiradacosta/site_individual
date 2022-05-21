var pergunta = {
    titulo: 'Qual o nome do protagonista?',
    alternativas: ['Dog G. Ruffy', 'Monkey D. Luffy', 'Gold Roger', 'Macaco Luffy', 'Monkey D. Garp'],
    correta: 1
};

function questao(q){
    var div_titulo = document.getElementById('titulo');
    div_titulo.textContent = q.titulo;

    var alt = document.querySelectorAll('.alternativa');
    alt.forEach(function(element, index){
        element.textContent = q.alternativas[index];
    })
}

questao(pergunta)