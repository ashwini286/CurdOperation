import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, updatePost } from '../Redux/postSlice';

const Post = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [updatetitle, setUpdateTitle] = useState('');
  const [updatedesc, setUpdateDesc] = useState('');

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const posts = useSelector((state) => state.posts.items);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '' || desc.trim() === '') {
      setErrorMessage('Please enter a value in all input fields.');
    } else {
      dispatch(addPost({ id: posts.length + 1, title, desc }));
      setTitle('');
      setDesc('');
      setErrorMessage('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="enter todo title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          placeholder="enter todo desc"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add Title</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>

      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <button
                onClick={() => {
                  setEdit(true);
                  setId(post.id);
                }}
              >
                Edit
              </button>
              <button onClick={() => dispatch(deletePost(post.id))}>
                Delete
              </button>
              <br />
              {edit && id === post.id && (
                <>
                  <input
                    type="text"
                    placeholder="update title"
                    value={updatetitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="update desc"
                    value={updatedesc}
                    onChange={(e) => setUpdateDesc(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        updatePost({ id: post.id, title: updatetitle, desc: updatedesc })
                      );
                      setUpdateTitle("")
                      setUpdateDesc("")
                      setEdit(false);
                    }}
                  >
                    Update
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>There are no posts.</p>
        )}
      </div>
    </div>
  );
};

export default Post;




// *******************************************************  //
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addPost, deletePost, updatePost } from '../Redux/postSlice'

// const Post = () => {
//     const [title, setTitle] = useState(" ")
//     const [desc, setDesc] = useState(" ")
//     const [errorMessage, setErrorMessage] = useState('');


//     // for update description
//     const [updatetitle, setUpdateTitle] = useState(" ")
//     const [updatedesc, setUpdateDesc] = useState(" ")

//     const[edit, setEdit] = useState(false)
//     const[id, setId] = useState(null)
//     const posts = useSelector((state) => state.posts.items)

//     const dispatch = useDispatch()
//     // function validClick(){
//     //     if(!title || !desc){
//     //         alert('Please enter all fields')
//     //         return false;
//     //         }
//     // }
//     const handleSubmit = (event) => {
//         event.preventDefault();
    
//         if (title.trim() === '' || desc.trim() === '' ) {
//           setErrorMessage('Please enter a value in the input field.');
//         } else {
//           // Perform your desired action, such as submitting the form
//           console.log('Form submitted successfully');
//         }
//       };

//     return (
//         <div>
//             <form className='form' onSubmit={handleSubmit} >
//                 <input
//                     type='text'
//                     value={title}
//                     placeholder='enter todo title'
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <input
//                     type='text'
//                     value={desc}
//                     placeholder='enter todo desc'
//                     onChange={(e) => setDesc(e.target.value)}
//                 />
//                 {

//                 }
//                 <button onClick={() => {
//                     dispatch(addPost({id: posts.length + 1, title,desc}))
//                     setTitle("")
//                     setDesc("")
//                     setErrorMessage('');

//                 }}>Add Title</button>
//                  {errorMessage && <p>{errorMessage}</p>}

//             </form>

//             <div className='posts'>
//               {posts.length > 0 ? posts.map(post => 
//                 <div key={post.id}  className='post'>
//                     <h2>{post.title}</h2>
//                     <p>{post.desc}</p>
//                     <button onClick={() => {
//                          setEdit(true) 
//                          setId(post.id)
//                     }}>Edit</button>
//                     <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
//                     <br />
//                     {
//                         edit && id == post.id && (
//                             <>
//                               <input type='text' 
//                               placeholder='update title'
                            
//                               onChange={(e) => setUpdateTitle(e.target.value)}
//                                />
//                               <input
//                                type='text' 
//                                placeholder='update desc' 
//                                 onChange={(e) => setUpdateDesc(e.target.value)}
//                                />
//                               <button onClick={() => {
//                                 dispatch(updatePost({id: post.id, title:updatetitle, desc: updatedesc }))
//                                 setEdit(!edit)
//                               }} >Update</button>

//                             </>
//                         )
//                     }
//                 </div>
              
//               ) : "there is no post"}

//             </div>
//         </div>
//     )
// }

// export default Post
