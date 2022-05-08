import Link from 'next/link'
import Counter from '../../count/Count'
import React, { useState,useEffect } from "react";
import { useSelector } from 'react-redux'
import {  getPosts } from '../../count/postSlide'
import { useDispatch } from 'react-redux';

function BlogList() {

    const posts  = useSelector(state => state.posts.posts)
   
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    },[])

    console.log('post below');
    console.log(posts);

    return <>
        <h1>Blog List </h1>
        <Counter />
        
        {posts.length ?
        posts.map((post) =>{
            return (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                        <h2> {post.id} {post.title} </h2>
                    </Link>
                </div>
            )
        })
        :
        (<p></p>)}
        
    </>
}


// export  function getStaticProps() {

//     // const { posts } = useSelector(state => state.post)

//     const { posts } = store.getState ()
//     console.log(posts);
//     // const dispatch= useDispatch();

//     // dispatch(fetchPost())
//     // Call an external API endpoint to get posts
//     // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     // const posts   = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts: posts.slice(0,3),
//       },
//     }
//   }

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts   = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts: posts.slice(0,3),
//       },
//     }
//   }

  export default BlogList