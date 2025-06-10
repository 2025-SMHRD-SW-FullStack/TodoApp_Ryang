import React, { useRef, useState } from 'react'


const Update = ({todos, setTodos, item, index}) => {
  const [isEditing, setIsEditing] = useState(false);   //수정 모드 여부
  const textRef = useRef("");

  return (
    <button onClick={()=>{
      if(!isEditing){
        setIsEditing(!isEditing);
        let newTodos = [...todos];
        newTodos[index] = <input type='text'/>
        setTodos(newTodos);
      }else{
        setIsEditing(!isEditing)
      }
    }}>{isEditing?"수정완료":"내용 수정하기"}
    </button>
  );

}

export default Update