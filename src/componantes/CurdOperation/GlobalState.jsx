import React, {createContext, useReducer} from 'react'
import AddReducer from './AddReducer'

const initialState ={
    users: [
        {"id": 1,"name":"Reading"},
        {"id":2,"name":"Writing"},
        {"id":3,"name":"Doing"}
    ]
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const[ state, dispatch] = useReducer(AddReducer, initialState);

    // Actions
  const removeUser = (id) => {
    dispatch({
        type:"REMOVE_USER",
        payload: id
        // payload:{ id : Math.floor((Math.random() * 5) + 0  } 
    })
  }

  const addUser = (user) => {
    dispatch({
        type:"ADD_USER",
        payload: user
        // payload:{ id : Math.floor((Math.random() * 5) + 0  } 
    })
  }

  const editUser = (user) => {
    dispatch({
        type: "EDIT_USER",
        payload: user
    })
  }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser, 
            addUser,
            editUser
            
            }}>
            {children}
        </GlobalContext.Provider>
    )
}