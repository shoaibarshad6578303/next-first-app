import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts= createAsyncThunk('posts/getPosts', async () =>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
})

const postSlice = createSlice({
  name: 'posts',
  initialState: {
       posts:[],
       status:null
    },
//   reducers: {
    // increment: state => state.count += 1,
    //  fetchPost: (state)  => {
    //     // var abc=[];
    //     // state.count.push(action.payload)
    //    const res=  fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => 
    //          response.json())

    //     .then(data => { 
    //         // console.log(data)
    //         return data
    //         // state.post= data
    //         // state.post.push(data)
    //         // console.log('abcjjj')
    //         // console.log( state)

    //     });
    //     // console.log('post postslide here');

    //     // console.log(response);
    //     // let post   = response
    //     // // console.log(state.post);

    //     // // console.log('post postslide here');

    //     // // console.log(posts);
    //     // console.log(res)
    //     // console.log('abc')

    //     // res=JSON.parse(JSON.stringify(res));


    //     state.posts = res
    // }
//   },
  extraReducers: {
      [getPosts.pending]: (state, actions) => {
          state.status= 'loading'
      },
      [getPosts.fulfilled]: (state, payload) => {
        //   console.log("yes working here");
        //   console.log(payload.payload);

         state.posts= payload.payload
         state.status= 'success'
      },
      [getPosts.rejected]: (state, actions) => {
        state.status= 'failed'
    },
  }
})

export const { fetchPost } = postSlice.actions;

export default postSlice.reducer;