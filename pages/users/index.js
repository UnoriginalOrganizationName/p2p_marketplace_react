export const getStaticProps = async () => {
    const res = await fetch(process.env.HOST + '/users');
    const data = await res.json();
    
    return {
        props: {users: data}
    }
}

const Users = ({users}) => {
    
    const data = Array.from(users)
    
    return (
        <div>
            <h1>Users</h1>
        {data.map(user =>(
            <div key={user.id}>
                <a>{user.email}</a>
            </div>
        ))}
    </div>
    )
}

export default Users;