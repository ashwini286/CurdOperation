import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const[inputEmail, setInputEmail] = useState('')
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('myData');
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };
  const handleSaveClick = () => {
    const newData = [...savedData, inputValue,inputEmail];
    localStorage.setItem('myData', JSON.stringify(newData));
    setSavedData(newData);
    setInputValue('');
    setInputEmail(' ')
    
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <input type="Email" value={inputEmail} onChange={handleEmailChange} />
      <button onClick={handleSaveClick}>Save</button>
      <ul>
        {savedData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
