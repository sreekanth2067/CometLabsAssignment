
import "./index.css"
import {Component} from"react"

class CreateProfile extends Component{
    state ={
        name: "",
        email: "",
        country: "Active",
        gender: "Male",
        password:"",
        address :""
    }
    nameChange=(event)=>{
        if (event.target.value === "") {
            document.getElementById("nameErrMsg").textContent = "Required*";
          } else {
            document.getElementById("nameErrMsg").textContent = "";
          }
        
          this.setState({ name: event.target.value });
    }
    passwordChange=(event)=>{
        if (event.target.value === "") {
            document.getElementById("passwordErrMsg").textContent = "Required*";
          } else {
            document.getElementById("passwordErrMsg").textContent = "";
          }
        
          this.setState({ password: event.target.value });
    }
    emailChange=(event)=>{
        if (event.target.value === "") {
            document.getElementById("emailErrMsg").textContent = "Required*";
          } else {
            document.getElementById("emailErrMsg").textContent = "";
          }
        
          this.setState({ email: event.target.value });
    }
    addressChange=(event)=>{
        if (event.target.value === "") {
            document.getElementById("addressErrMsg").textContent = "Required*";
          } else {
            document.getElementById("addressErrMsg").textContent = "";
          }
        
          this.setState({ address: event.target.value });
    }
    countryChange=(event)=>{
        this.setState({ country: event.target.value });
    }
    genderFemale=(event)=>{
        this.setState({ gender: event.target.value });
    }
    genderMale=(event)=>{
        this.setState({ gender: event.target.value });
    }
    validateFormData =()=> {
        let {name, email} = this.state;
        if (name === "") {
            document.getElementById("nameErrMsg").textContent = "Required*";
        }
        if (email === ""){
            document.getElementById("emailErrMsg").textContent = "Required*";
        }
    }
    submitFormData=()=>{
        const {name,email,gender,country,password,address}=this.state
        let formData={
            name:name,
            email:email,
            gender:gender,
            country:country,
            password:password,
            address:address,
            cartItems:[]
        }
        window.user=name
        localStorage.setItem(name,JSON.stringify(formData))
    }
    Submited=(event)=>{
        event.preventDefault();
        this.validateFormData();
        this.submitFormData();
      };
    
    render(){
        const{name,email,address}=this.state
    return(
        <div className="container">
      <h1 className="form-heading">Add User</h1>
      <form id="myForm" onSubmit={this.Submited}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input placeholder={name} onChange={this.nameChange} type="text" className="form-control" id="name" />
          <p id="nameErrMsg" className="error-message"></p>
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input onChange={this.passwordChange} type="text" className="form-control" id="password" />
          <p id="passwordErrMsg" className="error-message"></p>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input placeholder={email}  onChange={this.emailChange} type="text" className="form-control" id="email" />
          <p id="emailErrMsg" className="error-message"></p>
        </div>
        <div className="mb-3">
          <label htmlFor="name">Address</label>
          <input placeholder={address} onChange={this.addressChange} type="text" className="form-control" id="address" />
          <p id="addressErrMsg" className="error-message"></p>
        </div>
        <div className="mb-3">
          <label htmlFor="status">Country Status</label>
          <select id="status" onChange={this.countryChange} className="form-control">
            <option value="Active">India</option>
            <option value="Inactive">Non Indian</option>
          </select>
        </div>
        <div className="mb-3">
          <h1 className="gender-field-heading">Gender</h1>
          <input type="radio" name="gender" id="genderMale" onChange={this.genderMale} value="Male" checked />
          <label htmlFor="genderMale">Male</label>
          <input type="radio" name="gender" id="genderFemale" value="Female" onChange={this.genderFemale}  className="ml-2"/>
          <label htmlFor="genderFemale">Female</label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
    )}
}





export default CreateProfile;