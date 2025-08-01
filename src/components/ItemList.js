import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constants";
import {addItems} from "./utils/cartSlice"

const ItemList = ({items}) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //dispatch an action (add item)
        // send a message - add pizza in cart
        dispatch(addItems(item));
        
    }
  
    return(
        <div>
                {items.map(item => {
                    const info = item?.card?.info;
                    if(!info) return null;
                
                    const {name, price, defaultPrice, description, imageId, id} = info;
                            return(
                                <div
                                    key={id}
                                    className="pt-1 pb-1 pl-5 border-b-2"
                                    >
                                    <div className="flex justify-between flex-wrap">
                                    <div className="w-2/3 flex flex-col justify-center">
                                        <h2 className="text-black font-bold">{name}</h2>
                                        <span>{price ? price : defaultPrice / 100 }</span>
                                        <p className="text-xs">{description}</p>
                                    </div>
                                    <div className="relative">
                                        <img 
                                        className="w-52 h-auto float-right mt-2"
                                        src={CDN_URL + imageId}/> 
                                        <button className="p-1 shadow-lg absolute rounded-lg my-3 mx-1 bg-black text-white"
                                            onClick={() => handleAddItem(item)}
                                            >
                                            Add +
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                )
            })}
            
        </div>
    )
}

export default ItemList;