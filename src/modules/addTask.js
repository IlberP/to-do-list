// import taskInfo from './modules/createTask.js';
// import createInfo from './createTask.js';

function ResetForm(){
    document.getElementById('form').reset()
}

function taskInfo(taskName, dateDue, priority, description){
    this.taskName = taskName.value
    this.dateDue = dateDue.value;
    this.priority = priority.value;
    this.description = description.value;
};

let taskList = [];
let taskDetails;

function appendTask(){
    event.preventDefault()
    document.getElementById('taskForm').style.display = 'none';
    taskDetails = new taskInfo(taskName, dateDue, priority, description)
    taskList.push(taskDetails)
    pushTask()
    storeTask()
    ResetForm()
}

function pushTask(){
    const taskContainer = document.getElementById('taskContainer');
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
    taskName.classList.add('taskTitle')
    task.appendChild(taskName);

    const dateDue =  document.createElement('div');
    // const dateDuDueDay = item.document.getElementById('dateDuDueDue').value
    dateDue.textContent = item.dateDue
    dateDue.classList.add('date');
    task.appendChild(dateDue);

    const priority = document.createElement('div');
    priority.textContent = item.priority
    priority.classList.add('priority')
    task.appendChild(priority);

    if(item.priority === 'not important'){
        task.style.backgroundColor = 'lightgreen'
    }else if(item.priority === 'important') {
        task.style.backgroundColor = 'lightyellow'
    }else if(item.priority === 'urgent') {
        task.style.backgroundColor = 'lightcoral'
    };

    // const description = document.createElement('button')
    // description.textContent = 'description'
    // description.classList.add('Description')
    // task.appendChild(description)

    const descriptionText = document.createElement('details')
    descriptionText.classList.add('descriptionText')
    descriptionText.textContent = item.description

    const descriptionInfo = document.createElement('summary')
    descriptionInfo.textContent = 'Description'
    descriptionInfo.classList.add('descriptionInfo')

    // description.addEventListener('click', function(){
    //     event.preventDefault()
    //     document.getElementById('description').style.display = 'block'
    // })

    descriptionText.appendChild(descriptionInfo)

    task.appendChild(descriptionText)

    const complete = document.createElement('div')
    complete.classList.add('complete')
    task.appendChild(complete)


    const completeBtn = document.createElement('button')
    completeBtn.textContent = 'Done'
    completeBtn.classList.add('completeBtn');
    complete.appendChild(completeBtn);

    completeBtn.addEventListener('click', function(){
        taskList.splice(taskList.indexOf(item), 1);
        pushTask()
    })

    
    

    taskContainer.appendChild(task)
}

function storeTask(){
    localStorage.setItem('taskList', JSON.stringify(taskList))
}



// createInfo()
// const module = () => {
//     const taskFactory = (taskName, dateDuDueDue, priority, description) => {
//         return { taskName, dateDuDueDue, priority, description}
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