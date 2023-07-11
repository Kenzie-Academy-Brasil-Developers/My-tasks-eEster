const tasks = [
  {
    title: "Comprar comida para o gato",
    type: "Urgente",
  },
  {
    title: "Consertar Computador",
    type: "Prioritário",
  },
  {
    title: "Beber água",
    type: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const taskCardItem = document.createElement("li");
  const taskCardContent = document.createElement("div");
  const taskTitle = document.createElement("span");
  const taskDescription = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  taskCardContent.appendChild(taskTitle);
  taskCardContent.appendChild(taskDescription);

  // Criando botão para deletar tarefa
  const buttonDelete = document.createElement("button");

  // Adicionando icone ao botão
  buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  /// Adicionando a div e o botão de deletar ao list item
  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);

  return taskCardItem;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  let card = createCard(taskList[0]);
  htmlList.appendChild(card);

  card = createCard(taskList[1]);
  htmlList.appendChild(card);

  card = createCard(taskList[2]);
  htmlList.appendChild(card);
}

renderElements(tasks);
