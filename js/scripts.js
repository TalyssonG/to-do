//seleção de elementos--------

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("cancel-edit-btn");

//funções---------

const saveTodo = (text) => {
    // criando o html em js:
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    // botão 1:
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="ph ph-check"></i>'
    todo.appendChild(doneBtn)
    // botão 2:
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="ph ph-pencil-simple"></i>'
    todo.appendChild(editBtn)
    // botão 3:
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="ph ph-trash"></i>'
    todo.appendChild(deleteBtn)
    
    todoList.appendChild(todo)
    todoInput.value = ""
    todoInput.input()
}

//eventos---------

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue);
    }
    
});