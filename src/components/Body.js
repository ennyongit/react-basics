import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const fetchData = async () => {
        try{
        const response = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant");
            if(!response.ok){
                throw new Error("Failed to fetch");
            }
        
              const json = await response.json();
              console.log(json);
              setListOfRestaurant(json);

        } catch(error){
            console.log("Error fetching data");
        }
    }
            useEffect(() => {
                fetchData();
            }, []);
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
