import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="flex justify-center mt-5 flex-col items-center">
                <div>
                    <h1 className="font-bold">Cart</h1>
                </div>
                <div className="mt-5 w-6/12 border-2 border-gray p-2">
                {cartItems.length === 0 && <h1 className="text-center mt-2">Cart is empty Add something to the cart</h1>}
                    <ItemList items={cartItems}/>
                </div>
                <button 
                className="p-2 m-5 bg-black text-white rounded-lg"
                onClick={handleClearCart}
                >
                    Clear
                </button>
        </div>
    )
}

export default Cart;