/*const { reset } = require("nodemon"); */

/* const { render } = require("ejs"); Ima whoop VS code's a** */

/* Removed from todos.ejs line 49
<span class='<%= el.completed === true ? 'completed' : 'not'%>'><%= el.todo %></span> */

/* may need to add kanbannote-todo on to ul2 and ul3? can be hid until transferred*/

/*  undone = todotest = uL1  */

/*  done = doingtest = uL2  */

/*  make one for  (our)done = uL3  */

/* li or could be ul */




//Dracula

function init(){
    console.log(dragula([
        document.getElementById('uL1'), //parent container:todo
        document.getElementById('uL2'), //parent container: inprogress
        document.getElementById('uL3'), // parent container: completed
        //document.getElementById('4'),
        //document.getElementById('5')
    ]))
}



const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
// const dragulaProgress = document.querySelectorAll('')

const btn = document.getElementById('displayandhide').addEventListener('click', displayOrHide); // button to hide the input 


function displayOrHide() {    // function to hide inputs when adding a new task
    const form = document.getElementById('form');
    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
    }
}


const btn2 = document.getElementById('submitbtn').addEventListener('click', submitBtn);

function submitBtn() {    // function to hide inputs when adding a new task
    const form = document.getElementById('form');
    if (form.style.display === 'block') {
        // 👇️ this SHOWS the form
        form.style.display = 'none';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
    }
}

const getDelete = document.querySelector('.kanbannote-todo').addEventListener('click', showInfo); // shows the description and delete button.
function showInfo() {
    const remove = document.querySelector('.del')
    if (remove.style.display === 'none') {

        remove.style.display = 'block';
    } else {

        remove.style.display = 'none';
    }
}

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)

})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markComplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markIncomplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

