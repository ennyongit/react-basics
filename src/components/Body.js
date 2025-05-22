import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(RestaurantList);
    return(
        <div className="body">
            <div className="filter">
                <button onClick={() => {
                    let filteredList = listOfRestaurant.filter(
                        (res) => parseFloat(res.rating) > 6
                    );
                    setListOfRestaurant(filteredList);
                }}>
                    top rated resturant
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) =>
                        (<RestaurantCard key={restaurant.id} resData={restaurant}/>))
                }

            </div>
        </div>
    )
}


export default Body;
