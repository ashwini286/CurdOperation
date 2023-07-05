import React from 'react'

const ChildCompo = ({number, value}) => {
    const generateTable = () => {
        const table = [];
        // if(value) {
        //   for(let i = 1; i <= 10 ; i++){
        //     table.push(
            
        //       // result: value * i
        //       <tr key={i}>
        //       <td>{i}</td>
        //     </tr>
          

        //     )

        //   }
        // }
    
        for (let i = 1; i <= number; i++) {
          table.push(
            <tr key={i}>
              <td>{i}</td>
            </tr>
          );
        }
    
        return table;
      };
  return (
    <table>
    <tbody>{generateTable()}</tbody>
  </table>
  )
}

export default ChildCompo
