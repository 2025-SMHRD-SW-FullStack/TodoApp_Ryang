import React from 'react';

const CheckBox = ({ todos, item, index, setTodos }) => {
  const handleCheck = (e) => {
    const isChecked = e.target.checked;

    const updatedTodos = todos.map((data, idx) => {
      if (idx === index) {
        
        if (isChecked) {
          return <del>{data}</del>;
        } else {
          
          return data.props.children;
        }
      }
      return data;
      
    });

    setTodos(updatedTodos);
  };

  
  

  return (
    <div>
      <input type="checkbox" onChange={handleCheck} />
      
    </div>
  );
};

export default CheckBox;