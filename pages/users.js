import User from '../components/user';

function UserList({ users }) {
    return (
      <>
        <h1>List of users</h1>
        <ul>
          {users.map((user) => {

               return(
                  <div key={user.id}>
                    <User user={user} />
                  </div>
               );
               
            })}
        </ul>
      </>
    )
  }


  export async function getStaticProps() {
    // Call an external API endpoint to get users
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
  
    return {
      props: {
        users,
      },
    }
  }

  export default UserList