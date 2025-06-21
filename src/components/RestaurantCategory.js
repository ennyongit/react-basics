import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false);
    const {title} = data;
    console.log(data);

    const handleClick = () => {
       setShowItems(!showItems);
    }

    return(
        <div className="w-2/3 mt-5">
        <div>
            <div className="bg-gray-50 cursor-pointer" onClick={handleClick}
            >
              <h1 className="text-xl font-bold p-5">{title} ({data.itemCards.length})</h1>
            </div>
            <div>
              {showItems && <ItemList items={data.itemCards}/>}
        </div>
        </div>
        </div>
    )
}

export default RestaurantCategory;