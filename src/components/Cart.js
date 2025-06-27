import { useSelector } from "react-redux";
import ItemList from "./ItemList";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-center mt-5">
    <div className="w-6/12">
        <ItemList items={cartItems}/>
    </div>
    </div>
    )
}

export default Cart;