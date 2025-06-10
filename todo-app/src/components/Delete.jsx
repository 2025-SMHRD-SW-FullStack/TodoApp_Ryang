import React from 'react'

const Delete = ({todos, setTodos, item, index}) => {

  const deleteTodo = () => {
    todos.splice(index, 1)
    let newTodos = todos.filter((i) => i!={index})
    setTodos(newTodos)
    console.log(todos)
  }

  return (
    <div>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  )
}

export default Delete