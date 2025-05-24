import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
    console.log("header");
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src="https://images.seeklogo.com/logo-png/48/1/food-delivery-symbol-logo-png_seeklogo-486549.png" width={120}/>               
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/about">About us</Link>
                    </li>
                    <li>
                         <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                <button onClick={() => {
                        btnName === "Login" 
                        ? setBtnName("Logout") 
                        : setBtnName("Login");
                }} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;