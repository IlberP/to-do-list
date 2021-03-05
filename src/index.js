//load imports here 

import welcome from './modules/loadPage.js';
// import taskInfo from './modules/addTask.js';
import createInfo from './modules/createTask.js';
import appendTask from './modules/addTask.js';


init()

function init(){
    window.onload = welcome()
    // taskInfo()
    createInfo()
    appendTask()
    
}

