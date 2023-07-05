import React, { useState } from "react";
import styles from './Createtable.module.css' 
function CreateTable() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const handleNumberChange = (event) => {
    const { value } = event.target;
    setNumber(value);

    // Generate the table
    const newTable = [];
    if (value) {
      for (let i = 1; i <= 10; i++) {
        newTable.push({
          // multiplier: i,
          result: value * i
        });
      }
    }
    setTable(newTable);
  };

  return (
    <div className={styles.con}>
    <div className={styles.container}>
      <h4>Enter a Number which table you want to show</h4>
      <input  className={styles.inp} type="number" value={number} onChange={handleNumberChange}  style={{width:"200px"}}/>
      <table className={styles.tbl}>
        <thead>
          <tr>
          
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
            
              <td className={styles.tr}>{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}


export default CreateTable;