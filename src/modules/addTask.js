//create this into a factory function
const create = document.querySelectorAll('#create')
const submit = document.querySelectorAll('submitBtn')
const btnCancel = document.querySelectorAll('.btnCancel')

function taskInfo(title, date, importance){
    const taskInfo = {};
    taskInfo.title = title;
    taskInfo.date = date;
    taskInfo.importance = importance;
    return taskInfo
}

function createInfo(){
    create.forEach(create => {
        create.addEventListener('click', function(){
            document.getElementById('taskForm').style.display = 'block';
        })
    })
    btnCancel.forEach(btnCancel => {
        btnCancel.addEventListener('click', function(){
            document.getElementById('taskForm').style.display = 'none'
        })
    })
}

export default taskInfo
export default createInfo



// create.forEach(create => {
//     create.addEventListener('click', function(){
//         document.getElementById('taskForm').style.display = 'block'
//     })
// })

// btnCancel.forEach(btnCancel => {
//     btnCancel.addEventListener('click', function(){
//         document.getElementById('taskform').style.display = 'none'
//     })
// })



// function Task(title, date, priority){
//     this.title = title.value;
//     this.date = date.value;
//     this.priority = priority.value

// }

// let taskInfo
// function addTask(){
//     event.preventDefault()
//     taskInfo = new task(title, date, priority)

// }

// function createTask(item){
//     const container = document.querySelector('#taskContainer');
//     const task = document.createElement('div')
//     task.classList.add('task')
//     task.setAttribute('div')
// }