import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from './login/slice';
import counterReducer from './count/countSlide';
import postReducer from './count/postSlide';


export default configureStore({
  reducer: {
    // login: loginReducer,
    count: counterReducer,
    posts: postReducer,

  },
  devTools: true,
})