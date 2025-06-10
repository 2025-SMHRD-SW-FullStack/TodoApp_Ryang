import React from 'react';

const CheckBox = ({ todos, item, index, setTodos }) => {
  const handleCheck = (e) => {
    const isChecked = e.target.checked;

    const updatedTodos = todos.map((data, idx) => {
      if (idx === index) {
        
        if (isChecked) {
          return <del>{getTextOnly(data)}</del>;
        } else {
          
          return getTextOnly(data);
        }
      }
      return data;
    });

    setTodos(updatedTodos);
  };

  
  const getTextOnly = (data) => {
    return typeof data === 'string' ? data : data.props?.children || '';
  };

  return (
    <div>
      <input type="checkbox" onChange={handleCheck} />
      {item}
    </div>
  );
};

export default CheckBox;