import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export const postSlice = createSlice({
  name: 'counter',
  initialState: {
    items: []
  },
  reducers: {
   addPost: function(state, action){
    state.items.push(action.payload)
   },
   deletePost: function(state, action){
     state.items = state.items.filter(item => item.id !== action.payload)
   },
   updatePost: function(state, action){
    state.items.map(item => {
        if (item.id === action.payload.id ){
            item.title = action.payload.title;
            item.desc = action.payload.desc;

        }
    })
  }
  },
})

// Action creators are generated for each case reducer function
export const {addPost,deletePost,updatePost} = postSlice.actions
export default postSlice.reducer