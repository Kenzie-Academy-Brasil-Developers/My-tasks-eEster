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

  if (taskInfo.type === "Urgente") {
    taskTitle.classList.add('span-urgent')

  } else if (taskInfo.type === "Normal") {
    taskTitle.classList.add('span-normal')

  } else if (taskInfo.type === "Prioritário") {
    taskTitle.classList.add('span-priority')
  }

  // Adicionando o titulo da tarefa como texto do paragrafo
  taskDescription.innerText = taskInfo.title;

  // Adicionando span e paragrafo a div
  taskCardContent.appendChild(taskTitle);
  taskCardContent.appendChild(taskDescription);

  // Criando botão para deletar tarefa
  const buttonDelete = document.createElement("button");

  // Adicionando evento de deletar para o botão de delete
  buttonDelete.addEventListener('click', function () {
    const index = tasks.indexOf(taskInfo);
    tasks.splice(index, 1);
    renderElements(tasks);
  })

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
  for (let i = 0; i < taskList.length; i++) {
    let card = createCard(taskList[i]);
    htmlList.appendChild(card)
  }
}

renderElements(tasks);

// Chamando o botão de adicionar tarefa na lista
const buttonAdd = document.querySelector('#btnSubmit');

// Adicionando evento ao botão de adicionar tarefa na lista
buttonAdd.addEventListener('click', function (event) {

  event.preventDefault();
  const valueImput = event.target.form.elements.input_title.value
  const valueSelect = event.target.form.elements.input_priority.value

  const value = {
    title: valueImput,
    type: valueSelect,
  }

  tasks.push(value);
  renderElements(tasks);
})


