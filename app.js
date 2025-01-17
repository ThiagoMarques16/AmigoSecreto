let amigos = [];
let listaAmigos = document.querySelector("#listaAmigos");
let sorteado = []



function adicionarAmigo(){

      const nome = document.querySelector("#amigo");
      if(nome.value === ""){
            alert("Por favor, insira um nome.");
      }else{
            amigos.push(nome.value);
            limparCampo(nome)
            listarAmigos()
      }
}

function listarAmigos(){
      listaAmigos.innerHTML = "";
      amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
          });
}

function limparCampo(campo){
      campo.value = null;
}

function sortearAmigo(){
      let resultado = document.querySelector("#resultado");


      if (sorteado.length === amigos.length) {
            resultado.innerHTML = "Todos os amigos já foram sorteados!";
            return;
      }

      let nomeSorteado;

      do{
            nomeSorteado = Math.floor(Math.random() * amigos.length)
            resultado.innerHTML = amigos[nomeSorteado];
      }while(sorteado.includes(nomeSorteado));

      sorteado.push(nomeSorteado)


}
