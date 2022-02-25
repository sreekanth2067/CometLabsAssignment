import "./index.css"


const Profile=()=>{
    if (window.user==="" || window.user===undefined){
        return <p>Please Login to show details</p>
    }
    else{
        let data=JSON.parse(localStorage.getItem(window.user))
        return (<div className="cont">
            <h1>name:{data.name}</h1>
            <p>gender{data.gender}</p>
            <p>Address;{data.address}</p>
            <p>email:{data.email}</p>
        </div>)
    }
}
export default Profile