import React from 'react'

const BottomMove = ({todos, setTodos, item, index}) => {

  const moveBottom = () => {
    const result = todos.filter(() => {});

    result.push(item);

    setTodos(result);
  }

  return (
    <div>
      <button onClick={moveBottom}>맨 밑으로</button>
    </div>
  )
}

export default BottomMove