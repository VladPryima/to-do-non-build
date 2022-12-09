import React from "react";


/*Фільтри тасків*/
function FilterButton(props) {
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span className="visually-hidden">Показати </span>
        <span>{props.name}</span>
        <span className="visually-hidden">Таски</span>
      </button>
    );
  }

export default FilterButton;