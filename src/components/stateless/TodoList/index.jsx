import React from 'react';
import Todo from '../Todo';

const TodoList = (props) => {

  const items = props.todos.map( (todo, index) => {
    return <Todo key={index} {...todo} onClick={() => props.onTodoClick(index)}/>
  })
  
  return (
    <ul>
      {items} 
    </ul>
  )
}

export default TodoList;