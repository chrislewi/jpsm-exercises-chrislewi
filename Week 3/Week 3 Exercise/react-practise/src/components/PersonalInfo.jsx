import './PersonalInfo.css';

function PersonalInfo() {
    const name = "Chris Lewi";
const favLanguage = "JavaScript";
const hobbies = "Sleeping, Walking, Play Guitar";
const currentDateTime = new Date().toLocaleString();

return (
    <div>
        {

        }
        <h1>Hello, I am {name}</h1>
        <p>My favorite programming language is {favLanguage}.</p>
        <p>My hobbies are {hobbies}.</p>
        <br></br>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
        <br></br>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXxnxl-FPA1tFXmCiqYQgyxrRUyGC1WYeO-sapgCVMYvfpIbh3O-Jx-w&s=10"
        alt="Random image"
        className="profile-image" />
    </div>
)
}

export default PersonalInfo;