import { useState } from "react";
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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