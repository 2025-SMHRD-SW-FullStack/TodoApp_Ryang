import React, { useState } from 'react'

const Delete = () => {

  const [todos, setTodos] = useState();

  const deleteContent = () => {

  }

  return (
    <div>
      <button onClick={deleteContent}>삭제</button>
    </div>
  )
}

export default Delete