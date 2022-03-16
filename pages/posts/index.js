import Link from 'next/link'

function BlogList({posts}){
    return <>
        <h1>Blog List </h1>
        {posts.map((post) =>{
            return (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                        <h2> {post.id} {post.title} </h2>
                    </Link>
                </div>
            )
        })}
    </>
}



export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts   = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts: posts.slice(0,3),
      },
    }
  }

  export default BlogList