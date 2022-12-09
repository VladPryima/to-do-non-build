import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



let createTime = new Date().toLocaleString(); //Час створення
//Обєкт з данними тасків, передаємо в App як props
const DATA = [ 
  { id: "todo-Pf0BIH9z2Oc6S9Hx6M-m4", name: "Створити React-додаток", nameDes: "To-do-list з функціоналом додавання задачі, редагування,  фільтрації за статусом і датами оновлення-стоврення", createTime, editDate: "Не оновлювалось", completed: true },
  
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App  tasks={DATA} /> 
  </React.StrictMode>
);








