/* criar uma funcao para perguntar o que o usuario quer fazer */

function oqueFazer() {
  const passo = prompt(
    "O que você quer fazer? Escolhe uma das opções descritas na página."
  );
  return passo;
}
/* criar uma funcao para adicionar um item na lista de tarefas */
function processoLista(opcaoEscolhida) {
  if (opcaoEscolhida == "new") {
    const todo = prompt("Qual tarefa você quer adicionar? ");
    todoList.push(todo);
  } else if (opcaoEscolhida == "list") {
    for (item of todoList) {
      console.log(`${todoList.indexOf(item)}: ${item}.`);
    }
  } else if (opcaoEscolhida == "delete") {
    const escolherItem = parseInt(
      prompt("Qual o index do número que você quer deletar? ")
    );
    for (item of todoList) {
      if (escolherItem == todoList.indexOf(item)) {
        todoList.splice(todoList.indexOf(item), 1);
      }
    }
  } else {
    continuarRodando = false;
  }
}

const todoList = [];
let continuarRodando = true;

while (continuarRodando == true) {
  let opcao = oqueFazer();
  processoLista(opcao);
}
