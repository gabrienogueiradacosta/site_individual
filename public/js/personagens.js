function cadastrar_voto(voto){
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