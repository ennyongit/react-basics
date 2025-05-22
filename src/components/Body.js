import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant");

              const json = await response.json();
              console.log(json);
              setListOfRestaurant(json);
    }
            useEffect(() => {
                fetchData();
            }, []);

            if(listOfRestaurant.length === 0){
                return <Shimmer />
            }
            
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
                        (<RestaurantCard key={restaurant.restaurantID} resData={restaurant}/>))
                }

            </div>
        </div>
    )
}


export default Body;
