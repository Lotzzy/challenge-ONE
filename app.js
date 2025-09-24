let amigos = [];

const campoAmigo = document.getElementById("amigo");

// Adiciona um 'ouvinte de evento' para a tecla pressionada no campo.
campoAmigo.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada foi a 'Enter'.
  if (event.key === "Enter") {
    // Impede o comportamento padrão do Enter (que poderia ser recarregar a página).
    event.preventDefault();

    adicionarAmigo();
  }
});

function adicionarAmigo() {
  const nomeAmigo = campoAmigo.value.trim();

  // Valida se a entrada não está vazia.
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Verifica se "algum" amigo na lista,já existe.
  if (amigos.some((amigo) => amigo.toLowerCase() === nomeAmigo.toLowerCase())) {
    alert("Essa pessoa já foi adicionada anteriormente.");
    campoAmigo.value = "";
    campoAmigo.focus();
    return;
  }

  // Exibe o nome que acabou de ser digitado no console.
  console.log(`Nome adicionado a lista de sorteio: "${nomeAmigo}"`);

  amigos.push(nomeAmigo);

  atualizarLista();

  campoAmigo.value = "";
  campoAmigo.focus();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    item.classList.add("list-item");

    lista.appendChild(item);
  }
}

function sortearAmigo() {
  // Valida se há amigos suficientes para o sorteio.
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para realizar o sorteio!");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceSorteado];

  let resultadoEl = document.getElementById("resultado");
  resultadoEl.innerHTML = `<p class="restulado">O amigo secreto é: <strong>${amigoSorteado}</strong></p>`;
}
