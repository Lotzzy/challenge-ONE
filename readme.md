Claro, aqui está um arquivo README.md gerado com base no código fornecido, descrevendo o propósito e o funcionamento do projeto.

---

# Sorteador de Amigo Secreto

Este é um projeto simples para realizar o sorteio de um amigo secreto. A aplicação permite que você adicione uma lista de amigos e, em seguida, sorteie aleatoriamente um nome da lista para ser o "amigo secreto".

## 🎯 Propósito do Projeto

O objetivo principal deste projeto é fornecer uma ferramenta fácil e rápida para organizar sorteios de amigo secreto, seja para festas de fim de ano, confraternizações ou qualquer outra ocasião. A interface é minimalista e focada na funcionalidade principal: adicionar nomes e sortear um deles.

## ✨ Funcionalidades

O código implementa as seguintes funcionalidades:

- **Adicionar Amigo**: Permite que o usuário digite o nome de um amigo em um campo de texto e o adicione a uma lista.
  - A adição pode ser feita clicando em um botão ou pressionando a tecla `Enter`.
- **Validação de Entrada**:
  - Impede que nomes em branco sejam adicionados à lista.
  - Verifica se um nome já foi adicionado para evitar duplicatas (não diferencia maiúsculas de minúsculas).
- **Exibição da Lista**: Mostra dinamicamente a lista de todos os amigos que já foram adicionados.
- **Sorteio**: Realiza o sorteio de um nome aleatório da lista de amigos adicionados.
  - Exige que haja pelo menos dois amigos na lista para que o sorteio possa ser realizado.
- **Exibição do Resultado**: Mostra o nome do amigo sorteado na tela.

## 🚀 Como Usar

1.  **Abra a aplicação** em seu navegador.
2.  **Adicione os nomes**: No campo de texto, digite o nome de um amigo e clique no botão "Adicionar" ou pressione a tecla `Enter`.
3.  **Repita o processo**: Continue adicionando todos os participantes do sorteio. A lista de amigos será atualizada na tela a cada adição.
4.  **Realize o sorteio**: Quando todos os nomes estiverem na lista, clique no botão "Sortear".
5.  **Veja o resultado**: O nome do amigo secreto sorteado será exibido na área de resultado.

## 🛠️ Estrutura do Código

O projeto é construído com HTML, CSS e JavaScript e é dividido nas seguintes funções principais em JavaScript:

- `adicionarAmigo()`: Responsável por capturar o nome do campo de entrada, validar e adicionar à lista de amigos.
- `atualizarLista()`: Atualiza a exibição da lista de amigos na tela sempre que um novo nome é adicionado.
- `sortearAmigo()`: Contém a lógica para sortear aleatoriamente um nome da lista de amigos e exibir o resultado.

Além disso, um `eventListener` é usado para capturar o evento da tecla `Enter` no campo de texto, proporcionando uma melhor experiência de usuário ao adicionar nomes.
