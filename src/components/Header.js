import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    //portion of a store subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className="header flex justify-between items-center flex-wrap border border-gray-300">
            <div className="logo-container w-50">
                <img className="logo-img " src="https://images.seeklogo.com/logo-png/48/1/food-delivery-symbol-logo-png_seeklogo-486549.png" width={120}/>               
            </div>
            <div className="nav-items px-5">
                <ul className="flex gap-[15px] flex-wrap">
                    <li className="text-xl text-center">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                        <Link className="text-xl" to="/">Home</Link>
                    </li>
                    <li>
                         <Link className="text-xl"  to="/about">About us</Link>
                    </li>
                    <li>
                         <Link className="text-xl"  to="/contact">Contact us</Link>
                    </li>
                    <li> 
                        <Link className="text-xl" to="/cart">
                            Cart ({cartItems.length}) 
                        </Link>
                    </li>
                <button onClick={() => {
                        btnName === "Login" 
                        ? setBtnName("Logout") 
                        : setBtnName("Login");
                }} className="login text-xl">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;