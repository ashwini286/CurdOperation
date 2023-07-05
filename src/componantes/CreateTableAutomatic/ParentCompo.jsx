import React, { useState } from 'react';
import ChildCompo from './ChildCompo';
const ParentCompo = () => {
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => {
      setNumber(e.target.value);
    };
  return (
    <div>
      <input type="number" value={number} onChange={handleInputChange} />
      <ChildCompo number={number} />
    </div>
  )
}

export default ParentCompo
