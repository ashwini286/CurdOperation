import React, { useState } from 'react';
import style from './StudentForm.module.css'

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    fname: '',
    lname: '',
    email: '',
    state: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, studentData]);
    setStudentData({
        fname: '',
        lname: '',
        email: '',
        state: ''
    });
  };

  return (
    <div>
      <h1 className={style.student}>Student Form</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label>Fname:- </label>
          <input type="text" className={style.customInput}  name="fname" value={studentData.fname} onChange={handleChange} />
        </div>
        <div>
          <label>Lname:- </label>
          <input type="text" className={style.customInput}  name="lname" value={studentData.lname} onChange={handleChange} />
        </div>
        <div>
          <label>SEmail:- </label>
          <input type="Email" className={style.customInput}   name="email" value={studentData.email} onChange={handleChange} />
        </div>
        <div>
          <label>SState:- </label>
          <input type="text" className={style.customInput}   name="state" value={studentData.state} onChange={handleChange} />
        </div>
        <button type="submit" className={style.btn}>Submit</button>
      </form>

      {submittedData.length > 0 && (
        <table className={style.customTable}>
          <thead>
            <tr className={style.heading}>
              <th>Fname</th>
              <th>Lname</th>
              <th>Email</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody className={style.trbody}>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentForm;
