
import React, { useState } from "react"; /*Імпортуємо useState*/
import { nanoid } from "nanoid"; /*Імпортуємо бібліотеку унікальних id*/


/*Компоненти*/
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

import './App.css';


const FILTER_MAP = { //Фільтри для сортування
  Усі: () => true, //Філтр all - усі задачі
  Активні: (task) => !task.completed, //Активній задачі
  Виконані: (task) => task.completed, //Виконані (чекбокс)
  "По даті оновлення": (task) => task.editDate,
  "По даті створення": (task) => task.createTime
};
const FILTER_NAMES = Object.keys(FILTER_MAP); //Отримуємо ключі  у вигляді массива

function App(props) { /*Основний компонент App*/

const [tasks, setTasks] = useState(props.tasks); //Початкове значення tasks - обьект з елементами 

const [filter, setFilter] = useState('Усі'); //Сортування

 
function addTask(name, nameDes) { /*Пропс для Form, використовується в handleSubmit*/

let createTime = new Date().toLocaleString(); //Час створення

const newTask = { id: `todo-${nanoid()}`, name, nameDes, createTime, completed: false, editDate: "Не оновлювалось" }; /*Унікальні id з nanoid*/
  setTasks([...tasks, newTask]);
  console.log(newTask);
}

function toggleTaskCompleted(id) { /*Дивимось за чекбоксом таски*/

  const updatedTasks = tasks.map((task) => {
    if (id === task.id) {
      
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks); 
}

function deleteTask (id) { /*Видалення таски*/
  const remainingTasks = tasks.filter((task) => id !== task.id); //Прибираємо таску з id
  setTasks(remainingTasks);
  }

function editTask(id, newName, newDesc) { /*Редагування*/

//Дата

let editedTime = new Date().toLocaleString();

const editedTaskList = tasks.map((task) => { 
   
    if (id === task.id) {
      //
      return {...task, name: newName, nameDes: newDesc, editDate: editedTime } 
      }
    return task;
    });
    setTasks(editedTaskList);
  } 

  
  if (filter === "По даті оновлення") { //Якщо фільтр == "По даті оновлення"
    tasks.sort((a,b) => {
      let num = 0;
      if (a.editDate > b.editDate) {
          num = 1;
      }
      else if (a.editDate < b.editDate) {
          num = -1;
      }
      return num;
  }).map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      nameDes={task.nameDes}
      createTime={task.createTime}
      editDate={task.editDate}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  }

  else if (filter === "По даті створення") { //Якщо фільтр == "По даті створення"
    tasks.sort((a,b) => {
      let num = 0;
      if (a.createTime > b.createTime) {
          num = 1;
      }
      else if (a.createTime < b.createTime) {
          num = -1;
      }
      return num;
  }).map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      nameDes={task.nameDes}
      createTime={task.createTime}
      editDate={task.editDate}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  }
  const taskList = tasks //Філтри виконано/не виконано
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      nameDes={task.nameDes}
      createTime={task.createTime}
      editDate={task.editDate}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));


  //filter_names - массив с ключами-фильтрами
  const filterList = FILTER_NAMES.map((name) => ( //Сортування
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const headingText = `${taskList.length}`; /*Кількість тасків*/



  return (
    <div className="todoapp stack-large">
      <h1>Just doooo</h1> 
      <Form addTask={addTask}/> {/*Передаємо addTask в компонент form*/}
      <div className="filters btn-group stack-exception">
      {filterList} {/*Додаємо массив елементів сортування*/}
        
      </div>
      <h2 id="list-heading">Таски: {headingText}шт</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList} 
      </ul>
    </div>
  );
}



export default App; 
