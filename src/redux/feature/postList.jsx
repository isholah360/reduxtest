import { useEffect } from "react"
import { selectAllPosts, fetchPosts, getPostError, getPostStatus } from "./postSlice"
import { useSelector, useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

function PostList() {
   const posts = useSelector(selectAllPosts)
   const status = useSelector(getPostStatus)
   const error = useSelector(getPostError)
   const dispatch = useDispatch()
   const navigate = useNavigate()
 
  useEffect(()=>{
    if(status === "idle"){
      dispatch(fetchPosts())
    }
      
  }, [status, dispatch])

  const handleMore = (postId)=>{
      if(postId){
        navigate(`/${postId}`)
        console.log(postId)
      }
  }

  let postContent;
  if (status === "loading"){
     postContent = <div> loading.... </div>
  }
  else if( status === "success"){
     postContent = posts.map( post=>(
      <div key={post._id} className="post">
        <div className="title">{post.title}</div>
        <div className="content">{post.body.slice(0, 150)}... 
        <span onClick={()=> handleMore(post._id)}>readmore</span></div>
      </div>
    ))
  }
  else if(status === "failed"){
     postContent = <div>{error}</div>
  }
  return (
    <div>
      {postContent}
    </div>
  )
}

export default PostList
