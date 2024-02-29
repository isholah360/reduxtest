import {useEffect} from 'react'
import { fetchSinglePost, getSinglePost, getPostStatus, getPostError } from './postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../feature/post.css'


function SinglePost() {
   
  const singlePostz = useSelector(getSinglePost)
  
  const status = useSelector(getPostStatus)
  const error = useSelector(getPostError)
  const {postId} = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{

      if( postId ){
        dispatch(fetchSinglePost(postId))
      }
     
  }, [postId, dispatch])
  console.log(singlePostz)
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {singlePostz && (
        <article>
          <div className='title'>{singlePostz.title}</div>
          <div className='content'>{singlePostz.body}</div>
         
        </article>
      )}
    </div>
  );
}

export default SinglePost;
