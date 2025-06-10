import React, { useRef, useState } from 'react'
import CheckBox from './CheckBox';
import Update from './Update';
import BottomMove from './BottomMove';
import TopMove from './TopMove';
import Delete from './Delete';

const Todo = () => {

  //Todo
  //- 사용자가 등록한 업무를 보관할 배열 생성(state)
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addTodo =(e) => {
    e.preventDefault()
    let todo = inputRef.current.value;
    // todos.push(todo)
    // setTodos(todos.concat(todo))
    setTodos([...todos, todo]);
    
    
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form>
          <input type="text" ref={inputRef}/>
          <input type="submit" value="등록" onClick={addTodo}/>
        </form>
      </div>
      <div>
        {todos.map((item,index) => (
          
          <p key={index}>
            <CheckBox todos ={todos} setTodos = {setTodos}item={item} index={index}/>
            <Delete todos ={todos} setTodos = {setTodos}item={item} index={index}/>
            <Update todos ={todos} setTodos = {setTodos}item={item} index={index}/>
            <BottomMove todos ={todos} setTodos = {setTodos}item={item} index={index}/>
            <TopMove todos ={todos} setTodos = {setTodos}item={item} index={index}/>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Todo