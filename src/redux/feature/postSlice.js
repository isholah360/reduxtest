import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'http://localhost:5000/api/posts'

const initialState = {
  singlePost:  null,
  posts: [], 
  status: "idle" || "suceess", 
  error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await axios.get(baseUrl)
    return res.data
  } catch (error) {
    console.log(error)
  
}})
export const addPost = createAsyncThunk("posts/addPost", async (postData)=>{
  try {
    const res = await axios.post(baseUrl, postData)
    return res.data
  } catch (error) {
    console.log
  }
})
export const fetchSinglePost = createAsyncThunk("posts/fetchSinglePost", async (postId)=>{
   try {
    const res = await axios.get(`${baseUrl}/${postId}`)
    console.log(res.data)
    return res.data
    
   } catch (error) {
     console.log(error)
   }
})


const postSlice = createSlice({
  name: "posts", 
  initialState, 
  reducers:{

  },
  extraReducers:(builder) => {
    builder
    .addCase(fetchPosts.pending,  (state)=>{
     state.status = "loading"
    })
    .addCase(fetchPosts.fulfilled,  (state, action)=>{
      state.status = "success"
      state.posts = action.payload
     })
     .addCase(fetchPosts.rejected,  (state, action)=>{
      state.status = "failed"
      state.error= action.error.message
     })
     .addCase(addPost.fulfilled, (state, action)=>{
      state.posts.push(action.payload)
     })
     .addCase(fetchSinglePost.pending, (state)=>{
      state.status = "loading"
     })
     .addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.status = "idle"
      state.singlePost = action.payload;
      
    })
     .addCase(fetchSinglePost.rejected, (state, action)=>{
      state.status = 'error'
      state.error = action.error.message
     })

  }

})

export const selectAllPosts = (state) => state.posts.posts
export const getPostError = (state) => state.posts.error
export const getPostStatus = (state) => state.posts.status
export const getSinglePost = state => state.posts.singlePost


export default postSlice.reducer