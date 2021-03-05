/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage.js */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_createTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createTask.js */ \"./src/modules/createTask.js\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n//load imports here \n\n\n// import taskInfo from './modules/addTask.js';\n\n\n\n\ninit()\n\nfunction init(){\n    window.onload = (0,_modules_loadPage_js__WEBPACK_IMPORTED_MODULE_0__.default)()\n    // taskInfo()\n    ;(0,_modules_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)()\n    ;(0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_2__.default)()\n    \n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import taskInfo from './modules/createTask.js';\n// import createInfo from './createTask.js';\n\nfunction ResetForm(){\n    document.getElementById('form').reset()\n}\n\nfunction taskInfo(taskName, dateDue, priority, description){\n    this.taskName = taskName.value\n    this.dateDue = dateDue.value;\n    this.priority = priority.value;\n    this.description = description.value;\n};\n\nlet taskList = [];\nlet taskDetails;\n\nfunction appendTask(){\n    event.preventDefault()\n    document.getElementById('taskForm').style.display = 'none';\n    taskDetails = new taskInfo(taskName, dateDue, priority, description)\n    taskList.push(taskDetails)\n    pushTask()\n    storeTask()\n    ResetForm()\n}\n\nfunction pushTask(){\n    const taskContainer = document.getElementById('taskContainer');\n    const tasks = document.querySelectorAll('.task');\n    tasks.forEach(task => taskContainer.removeChild(task))\n\n    for(let i = 0; i < taskList.length; i++)\n    makeTask(taskList[i])\n}\n\nfunction makeTask(item){\n    const taskContainer = document.querySelector('#taskContainer');\n    const task = document.createElement('div');\n    task.classList.add('task');\n    task.setAttribute('div', taskList.indexOf(item));\n\n    const taskName = document.createElement('div') \n    taskName.textContent = item.taskName\n    taskName.classList.add('taskTitle')\n    task.appendChild(taskName);\n\n    const dateDue =  document.createElement('div');\n    // const dateDuDueDay = item.document.getElementById('dateDuDueDue').value\n    dateDue.textContent = item.dateDue\n    dateDue.classList.add('date');\n    task.appendChild(dateDue);\n\n    const priority = document.createElement('div');\n    priority.textContent = item.priority\n    priority.classList.add('priority')\n    task.appendChild(priority);\n\n    if(item.priority === 'not important'){\n        task.style.backgroundColor = 'lightgreen'\n    }else if(item.priority === 'important') {\n        task.style.backgroundColor = 'lightyellow'\n    }else if(item.priority === 'urgent') {\n        task.style.backgroundColor = 'lightcoral'\n    };\n\n    // const description = document.createElement('button')\n    // description.textContent = 'description'\n    // description.classList.add('Description')\n    // task.appendChild(description)\n\n    const descriptionText = document.createElement('details')\n    descriptionText.classList.add('descriptionText')\n    descriptionText.textContent = item.description\n\n    const descriptionInfo = document.createElement('summary')\n    descriptionInfo.textContent = 'Description'\n    descriptionInfo.classList.add('descriptionInfo')\n\n    // description.addEventListener('click', function(){\n    //     event.preventDefault()\n    //     document.getElementById('description').style.display = 'block'\n    // })\n\n    descriptionText.appendChild(descriptionInfo)\n\n    task.appendChild(descriptionText)\n\n    const complete = document.createElement('div')\n    complete.classList.add('complete')\n    task.appendChild(complete)\n\n\n    const completeBtn = document.createElement('button')\n    completeBtn.textContent = 'Done'\n    completeBtn.classList.add('completeBtn');\n    complete.appendChild(completeBtn);\n\n    completeBtn.addEventListener('click', function(){\n        taskList.splice(taskList.indexOf(item), 1);\n        pushTask()\n    })\n\n    \n    \n\n    taskContainer.appendChild(task)\n}\n\nfunction storeTask(){\n    localStorage.setItem('taskList', JSON.stringify(taskList))\n}\n\n\n\n// createInfo()\n// const module = () => {\n//     const taskFactory = (taskName, dateDuDueDue, priority, description) => {\n//         return { taskName, dateDuDueDue, priority, description}\n//     };\n\n//     let taskArray = []\n\n//     const taskHashMap = new Map();\n\n//     function initialHashMapSync () {\n//         for( let i = 0; i < taskArray.length; i++) {\n//             if(taskArray[i].)\n//         }\n//     }\n// }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n\n//create this into a factory function\nconst create = document.querySelectorAll('#create')\nconst submitBtn = document.querySelectorAll('.submitBtn')\nconst btnCancel = document.querySelectorAll('.btnCancel')\n\n// function taskInfo(title, date, importance){\n//     const taskInfom = {};\n//     taskInfom.title = title;\n//     taskInfom.date = date;\n//     taskInfom.importance = importance;\n//     return taskInfom\n// }\n\nfunction createInfo(){\n    create.forEach(create => {\n        create.addEventListener('click', function(){\n            document.getElementById('taskForm').style.display = 'block';\n        })\n    })\n    btnCancel.forEach(btnCancel => {\n        btnCancel.addEventListener('click', function(){\n            event.preventDefault()\n            document.getElementById('taskForm').style.display = 'none'\n        })\n    })\n    submitBtn.forEach(submitBtn => {\n        submitBtn.addEventListener('click', _addTask_js__WEBPACK_IMPORTED_MODULE_0__.default)\n        // event.preventDefault\n    })\n}\n\n\n\n// export default taskInfo\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInfo);\n\n\n\n// create.forEach(create => {\n//     create.addEventListener('click', function(){\n//         document.getElementById('taskForm').style.display = 'block'\n//     })\n// })\n\n// btnCancel.forEach(btnCancel => {\n//     btnCancel.addEventListener('click', function(){\n//         document.getElementById('taskform').style.display = 'none'\n//     })\n// })\n\n\n\n// function Task(title, date, priority){\n//     this.title = title.value;\n//     this.date = date.value;\n//     this.priority = priority.value\n\n// }\n\n// let taskInfo\n// function addTask(){\n//     event.preventDefault()\n//     taskInfo = new task(title, date, priority)\n\n// }\n\n// function createTask(item){\n//     const container = document.querySelector('#taskContainer');\n//     const task = document.createElement('div')\n//     task.classList.add('task')\n//     task.setAttribute('div')\n// }\n\n//# sourceURL=webpack://to-do-list/./src/modules/createTask.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction welcome(){\n    const modal = document.getElementById('welcome');\n    modal.style.display = 'block'\n\n   const close =  document.getElementById('close');\n   close.addEventListener('click', function(){\n       event.preventDefault();\n       modal.style.display = 'none'\n   })\n\n//    window.onload('load', welcome())\n\n}\n\n// window.onload('load', welcome())\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/loadPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;