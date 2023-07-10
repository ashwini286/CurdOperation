import React, {useContext, useState} from 'react'
import { GlobalContext } from './GlobalState'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import  {
Form,
FormGroup,
Label,
Input,Button
} from 'reactstrap'
const AddUser = () => {
  const [name, setName] = useState(' ');
  const {addUser } = useContext(GlobalContext);
  const navigate = useNavigate();



  const AddSubmit = () => {
   const newUser = {
    id: uuidv4(),
    name
   }
   addUser(newUser);
   navigate('/');

  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  return (
   <Form onSubmit={AddSubmit}>
    <FormGroup>
        <Label>
        Name: </Label>
        <Input type='text' value={name} placeholder='enter Todo' onChange={handleChange}></Input>

    </FormGroup>
    <Button type="submit">Submit </Button>
    <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
   </Form>
  )
}

export default AddUser