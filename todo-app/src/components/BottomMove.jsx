import React from 'react'

const BottomMove = ({todos, setTodos, item, index}) => {

  const moveBottom = () => {
    setTodos(
      todos.filter((data, idx) => idx !== index).concat(todos[index])
    );
  };

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={moveBottom}>맨 밑으로</button>
    </div>
  );
}

export default BottomMove