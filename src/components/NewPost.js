//This is just what I came up with when following Taylor's video. Don't think it works.

import axios from "axios";
import { withRouter } from "react-router";
import { useState } from "react";


const NewPost = ({history}) => {

  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [author, setAuthor] = useState('');

  const CreatePost = (e) => {
      e.preventDefault ();

      if (title !== '' && story !== '' && author !== ''){
        const req = {
          title,
          story,
          author
        };

        // const token = localStorage.getItem('myJWT');

        // if (!token){
        //   //redirect
        //   history.push('/login')
        // }
        // const options = {
        //   headers:{
        //     'Authorization': 'Bearer ${token}'
        //   }

        }
        axios.post('http://localhost300/Home', req, options).then(result => {
          console.log(result.data);
          history.push('/');
        });
      }
  };

return (
    <div>
        <form onSubmit={ CreatePost }>
            <h1>Create a new post!</h1>
            <label>Title</label>
            <input type="text" name="title" onChange={ e => setTitle(e.target.value) }/>
            <label>Story</label>
            <input type="text" name="story" onChange={ e => setStory.target.value) }/>
            <label>Author</label>
            <input type="text" name="author" onChange={ e => setAuthor(e.target.value) }/>
            <button>Create!</button>

        </form>
    </div>
);
};

export default NewPost;
