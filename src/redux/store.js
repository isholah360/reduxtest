
import { configureStore } from '@reduxjs/toolkit';
import cssReducer from './ccSlice';
import postReducer from '../redux/feature/postSlice'
import userReducer from '../redux/user/userSlice'

const store = configureStore({
  reducer: {
    css: cssReducer,
    posts: postReducer,
    users: userReducer
  },
});

export default store;