"use strict"
document.addEventListener('DOMContentLoaded',function (e) {
  e.preventDefault()

  const list = document.querySelector('#todo-list ul')
  const forms = document.forms

  // Add todo
  const addTodo = forms['add-todo']
   addTodo.addEventListener('submit',function(e) {
    e.preventDefault()
    const value = addTodo.querySelector('input[type = "text"]').value
    const li = document.createElement('li')
    const toDo = document.createElement('span')
    const deleteBtn = document.createElement('span')
    const done = document.createElement('span')

    toDo.textContent = value
    deleteBtn.textContent = 'Delete'
    done.textContent = 'Done'

    li.appendChild(toDo)
    li.appendChild(deleteBtn)
    li.appendChild(done)
    list.appendChild(li)

    toDo.classList.add('name')
    deleteBtn.classList.add('delete')
    done.classList.add('done')
    addTodo.reset()
   })

   // Delete Todo
   list.addEventListener('click', function(e) {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement
      li.parentNode.removeChild(li)
    }
   })

   // Done Todo
   list.addEventListener('click', function(e) {
    if(e.target.className == 'done'){
      const li = e.target.parentElement
      li.querySelector('.name').style.textDecoration = 'line-through'
    }
   })

   // Search Todo
   const searchBox = forms['search-todos'].querySelector('input')
   searchBox.addEventListener('keyup', function(e) {
    const terms = e.target.value.toLowerCase()
    const todos = list.getElementsByTagName('li')
    Array.from(todos).forEach((todo) => {
      const title = todo.firstElementChild.textContent
      if(title.toLowerCase().indexOf(terms) != -1) {
        todo.style.display = 'block'
      } else {
        todo.style.display = 'none'
      }
    });
   })

})