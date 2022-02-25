import "./index.css"
import { Link } from "react-router-dom"
const Resize = ()=>{
    document.getElementById("cont1").classList.toggle("cont11")
    document.getElementById("cont1").classList.toggle("cont12")
    document.getElementById("Ec").classList.toggle("hide")
    document.getElementById("expand").classList.toggle("hide")
    document.getElementById("home").classList.toggle("hide")
    document.getElementById("profile").classList.toggle("hide")
    document.getElementById("CreateProfile").classList.toggle("hide")
    document.getElementById("items").classList.toggle("hide")
    document.getElementById("refer").classList.toggle("hide")
    document.getElementById("cart").classList.toggle("hide")
    document.getElementById("log_out").classList.toggle("hide")
    document.getElementById("cross").classList.toggle("hide")
}
const logingout=()=>{
    window.user=""
}
const Dashboard = () => {
    return (
        <div id="cont1" className='cont11'>
            <div className="d-flex flex-row inner-cont">
                <h1 className="head" id="Ec">E-Commerce</h1>
                <i id="cross" onClick={Resize} class="fa-solid fa-circle-xmark "></i>
                <i id="expand" onClick={Resize} class="fa-solid fa-angle-right hide"></i>
            </div>
            <ul className='list-items'>
                <li  id="home" className='list-item1'>
                    <i class="fa-solid fa-house-chimney"></i>
                   <Link to="/" >Home</Link> </li>
                <li id="CreateProfile" className='list-item1'>
                    <i class="fa-solid fa-user"></i>
                    <Link to="/create" >CreateProfile</Link></li>
                <li id="profile" className='list-item1'>
                    <i class="fa-solid fa-user"></i>
                <Link to="/profile" >Profile</Link></li>
                <li  id="items" className='list-item1'>
                    <i class="fa-solid fa-apple-whole"></i>
                <Link to="/Products" >Items</Link> </li>
                <li id="refer" className='list-item1'>
                    <i class="fa-solid fa-share-nodes"></i>
                <Link to="/refer" >Refer and Earn Coupons</Link> </li>
                <li  id="cart" className='list-item1'>
                    <i class="fa-solid fa-cart-arrow-down"></i>
                <Link to="/cart">Cart</Link> </li>
                <li onClick={logingout} id="log_out" className='list-item1'>
                    <i class="fa-solid fa-square-left"></i>
                <p >Log Out</p> </li>
            </ul>
      </div>
    )
}

export default Dashboard;