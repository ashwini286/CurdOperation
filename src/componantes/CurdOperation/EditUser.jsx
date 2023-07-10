import React, {useContext, useState, useEffect} from 'react'
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

const EditUser = (props) => {
  const [selectUser, setSelectUser] = useState({
    id: "",
    name:"",
  });
  const {users,editUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const currentUserId = props.match.params.id 
  useEffect (() => {
    const userId = currentUserId;
    const selectUser = users.find(user => user.id === Number(userId))
    setSelectUser(selectUser)
  },[currentUserId, users])



  const EditSubmit = () => {
   editUser(selectUser)
   navigate('/');
  }

  

  const handleChange = (e) => {
   setSelectUser({...selectUser, [e.target.name]: e.target.value})
  }

  return (
    <Form onSubmit={EditSubmit}> 
    <FormGroup>
        <Label>
        Todo: </Label>
        <Input type='text'value={selectUser.name} name='name' onChange={handleChange} placeholder='enter Todo'></Input>

    </FormGroup>
    <Button type="submit">Submit </Button>
    <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
   </Form>
  )
}

export default EditUser
