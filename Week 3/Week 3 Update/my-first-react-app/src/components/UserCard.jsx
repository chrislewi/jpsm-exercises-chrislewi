// function UserCard({name, email, role}) {
//     return (
//         <div classname="user-card">
//             <h1>{name}</h1>
//             <p>{email}</p>
//             <span>{role}</span>
//         </div>
//     )
// }

// export default UserCard;


function UserCard({ name = "Anonymous", age = 0, isActive = false}) {
    return (
        <div>
            <h2>{name}</h2>
            <p> {age}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
}

export default UserCard;