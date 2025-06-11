import React, { useRef, useState } from 'react'


const Update = ({todos, setTodos, item, index}) => {
  const [isEditing, setIsEditing] = useState(false);   //수정 모드 여부
  const textRef = useRef("");
  const [editText, setEditText] = useState(todos[index]);

   const handleClick = () => {
    if (isEditing) {
      // 수정 완료 시: todos 내용 변경
      const updatedTodos = [...todos];
      updatedTodos[index] = editText;
      setTodos(updatedTodos);
    }
    setIsEditing(!isEditing); // 토글
  };
  
  return (
    <div style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todos[index]}</span>
      )}
      <button onClick={handleClick}>
        {isEditing ? "수정완료" : "내용 수정하기"}
      </button>
    </div>
  );
}

export default Update