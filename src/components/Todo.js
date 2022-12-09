import React, { useState } from "react";



 function Todo(props) { 
  //Редагування імені
    const [isEditing, setEditing] = useState(false); //Редагування
    const [newName, setNewName] = useState(''); //Ім'я таски
    function handleChange(e) { //Змінюємо ім'я таски
        setNewName(e.target.value); 
      }
  //Редагування опису
  const [newDesc, setNewDesc] = useState('');
  function handleChangeDesc(e) { 
    setNewDesc(e.target.value); 
  }
    
      function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName, newDesc);
        setNewName("");
        setNewDesc("");
        setEditing(false);
      }
    //Умовний рендеринг: шаблон для редагування та для огляду
    const editingTemplate = ( //Редагування
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
              Нове ім'я і опис для задачі: {props.name}
            </label>
            <input id={props.id} className="todo-text" type="text" value={newName}
  onChange={handleChange}/>
            <textarea  className="todo-text-height"  value={newDesc}
  onChange={handleChangeDesc}/> 
          </div>
          <div className="btn-group">
            <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
              Скасувати
              <span className="visually-hidden">renaming {props.name}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Зберегти
              <span className="visually-hidden">new name for {props.name}</span>
            </button>
          </div>
        </form>
      );
    const viewTemplate = ( //Огляд
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            <b>{props.name}</b>;
          </label>
          
        </div>
        <div class="borderBottom"> {/*Опис таски*/}
        <label>{props.nameDes}</label>
        </div>
        <span>ID: {props.id}</span> 
        <p>Створено: {props.createTime}</p>
        <p>Оновлено: {props.editDate}</p>
        <div className="btn-group">
          <button type="button button_change" className="btn" onClick={() => setEditing(true)}>
            Редагувати <span className="visually-hidden">{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Видалити <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
    </div>
  );
    
     
    return  <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
    
  };

  
  export default Todo;

  