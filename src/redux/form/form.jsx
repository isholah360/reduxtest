import { useState } from "react";
import '../feature/post.css'
import { addPost } from "../feature/postSlice";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e)=>{
     e.preventDefault()
     if(title, tag, body){
      dispatch(addPost({title, tag, body}))
     }
     navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="titles"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        
        />
        <br />
        <input
          className="tag"
          type="text"
          placeholder="Title"
          onChange={(e) => setTag(e.target.value)}
        
        />
       <br />
        <textarea
          rows={10}
          className="textarea"
          type="text"
          placeholder="Content"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
