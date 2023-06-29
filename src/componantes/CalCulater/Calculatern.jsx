import React, { useState } from 'react';
import style from './Calculater.module.css';
const Calculatern = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const handleAddition = () => {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${sum}`);
      setNum1(' ');
      setNum2(' ');
    };
  
    const handleSubtraction = () => {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${difference}`);
      setNum1(' ');
      setNum2(' ');
    };
  
    const handleMultiplication = () => {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${product}`);
      setNum1(' ');
      setNum2(' ');
    };
  
    const handleDivision = () => {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(`Result: ${quotient}`);
      setNum1(' ');
      setNum2(' ');
    };
    const handleDelete = () => {
      setNum1(' ');
      setNum2(' ');
      setResult(' ');
    };
  return (
    <div className={style.container}>
      <h1>{result}</h1>
      Enter the First number:{' '}
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <br />
      Enter the Second number:{' '}
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAddition} className={style.btn}>Addition</button> &nbsp; &nbsp;
      <button onClick={handleSubtraction} className={style.btn}>Subtraction</button> &nbsp; &nbsp;
      <button onClick={handleMultiplication} className={style.btn}>Multiplication</button>&nbsp;
      &nbsp;
      <button onClick={handleDivision} className={style.btn}>Division</button>&nbsp; &nbsp;
      <button onClick={handleDelete} className={style.btn}>Delete</button>
    </div>
  )
}

export default Calculatern
