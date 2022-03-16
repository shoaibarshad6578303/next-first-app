import {useRouter} from 'next/router';

function PostDetail({post}){
    const router= useRouter()

    if(router.isFallback){
      return <h1> Loading...</h1>
    }

    return (
        <>
            <h1>Post Detail</h1>
            <h2> {post.id} {post.title} </h2>
            <p>{post.body}</p>
        </>
    )
}


export async function getStaticPaths(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data   = await res.json()
  
  // const paths= data.map(post => {
  //   return {
  //     params: {
  //       postId: `${post.id}`
  //     }
  //   }
  // })

  return {
    paths:[
      {
        params: {postId: '1'},
      },
      {
        params: {postId: '2'},
      },
      {
        params: {postId: '3'},
      },
    ],
    // paths: paths,
    fallback: true,
  }
}


export async function getStaticProps(context) {
    const {params} = context;

    // Call an external API endpoint to get posts
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post   = await res.json()

    if(!post.id){
      return {
        notFound: true
      }
    }

    console.log(`generating page for posts/${params.postId}`);
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build tipostId
    return {
      props: {
        post,
      },
    }
  }

export default PostDetail