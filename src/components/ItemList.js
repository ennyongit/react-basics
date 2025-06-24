import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addItems } from "./utils/cartSlice";

const ItemList = ({items}) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = () =>{
        //dispatch an action (add item)
        dispatch(addItems("pizza"));
        
    }
  
    return(
        <div>
                {items.map(item => {
                const {name, price, defaultPrice, description, imageId, id} = item?.card?.info;
                return(
                    <div
                        key={id}
                        className="pt-2 pb-2 pl-5 border-b-2"
                        >
                        <div className="flex justify-between flex-wrap">
                        <div className="w-2/3">
                            <h2 className="text-black font-bold">{name}</h2>
                            <span>{price ? price : defaultPrice / 100 }</span>
                            <p className="text-xs">{description}</p>
                        </div>
                        <div className="relative">
                             <img 
                             className="w-52 h-auto float-right mt-2"
                             src={CDN_URL + imageId}/> 
                             <button onClick={handleAddItem}
                             className="p-1 shadow-lg absolute rounded-lg my-3 mx-1 bg-black text-white">Add +</button>
                        </div>
                        </div>
                    </div>
                    )
            })}
            
        </div>
    )
}

export default ItemList;