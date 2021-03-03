// import taskInfo from './modules/createTask.js';
import createInfo from './createTask.js';

// function ResetForm(){
//     document.getElementById('taskForm').reset()
// }

function taskInfo(taskName, dateDue, priority){
    this.taskName = taskName.value
    this.dateDue = dateDue;
    this.priority = priority
};

let taskList = [];
let taskDetails;

function appendTask(){
    //preventDefault()
    document.getElementById('taskForm').style.display = 'none';
    taskDetails = new taskInfo(taskName, dateDue, priority)
    taskList.push(taskDetails)
    pushTask()
    // ResetForm()
}

function pushTask(){
    const taskContainer = document.getElementById('#taskContainer');
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => taskContainer.removeChild(task))

    for(let i = 0; i < taskList.length; i++)
    makeTask(taskList[i])
}

function makeTask(item){
    const taskContainer = document.querySelector('#taskContainer');
    const task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('div', taskList.indexOf(item));

    const taskName = document.createElement('div') 
    taskName.textContent = item.taskName
    taskName.classList.add('taskName')
    task.appendChild(taskName);
}



createInfo()
// const module = () => {
//     const taskFactory = (taskName, dateDue, priority, description) => {
//         return { taskName, dateDue, priority, description}
//     };

//     let taskArray = []

//     const taskHashMap = new Map();

//     function initialHashMapSync () {
//         for( let i = 0; i < taskArray.length; i++) {
//             if(taskArray[i].)
//         }
//     }
// }


export default appendTask