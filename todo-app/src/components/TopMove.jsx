import React from 'react'

const TopMove = ({todos, setTodos, item, index}) => {

  const moveTop = () => {
    const result = todos.filter(() => {});

    result.push(item);

    setTodos(result);
  }

  return (
    <div>
      <button onClick={moveTop}>맨 위로</button>
    </div>
  )
}

export default TopMove