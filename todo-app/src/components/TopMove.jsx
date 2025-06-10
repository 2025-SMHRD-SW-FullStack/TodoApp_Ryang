import React from 'react'

const TopMove = ({todos, setTodos, item, index}) => {

  const moveTop = () => {
    setTodos(
      todos
        .filter((data, idx) => idx === index)
        .concat(todos.filter((data, idx) => idx !== index))
    );
  };

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={moveTop}>맨 위로</button>
    </div>
  );
}

export default TopMove