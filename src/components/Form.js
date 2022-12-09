import React, { useState } from "react";

/*Компонент для створення задачі */
function Form(props) {

  
    /*Слухаємо подію через onChange в input для імені таски:*/
    function handleChange(e) {
        setName(e.target.value); 
      }
    const [name, setName] = useState('');

    //Подія для опису таски
    function handleChangeDescription(e) {
      setNameDescription(e.target.value); 
    }
    const [nameDes, setNameDescription] = useState('');

    function handleSubmit(e) { /*Обробник для submit*/
        e.preventDefault();
        
        props.addTask(name, nameDes);  /*prop addTask з App.js.*/
       
        setName(""); //Очистка
        setNameDescription("");
      }
     
    return (
      <form class = "form" onSubmit={handleSubmit} > 
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Що треба зробити?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name} /*Значення value через отримання почтакового стану з name*/
          onChange={handleChange} 
          
        />
        <p>Опис задачі:</p>
        <textarea
          id="new-todo-input-description"
          className="todo-text-height"
          name="text"
          autoComplete="off"
          value={nameDes} 
          onChange={handleChangeDescription} 
          
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Додати:
        </button>
      </form>
    );
  }



  export default  Form;
 
 
  
