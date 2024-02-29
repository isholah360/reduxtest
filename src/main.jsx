import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom'
import SinglePost from './redux/feature/singlePost.jsx'
import PostList from './redux/feature/postList.jsx'
import Form from './redux/form/form.jsx'




const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<App />}>     
         <Route index element={<PostList/>}/>
         <Route path='/:postId' element={<SinglePost  />}/>
         <Route path='/post' element={<Form />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
