import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        setListOfRestaurant(RestaurantList);
        setFilteredRestaurant(RestaurantList);
    },[])

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                    />
                    <button onClick={()=>{
                        // filter and update ui
                         let filteredRestaurant =  listOfRestaurant.filter((res) => 
                           res.title.toLowerCase().includes(inputText.toLowerCase()));
                         setFilteredRestaurant(filteredRestaurant);
                        console.log(inputText);
                    }}>Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    let filteredList = listOfRestaurant.filter(
                        (res) => parseFloat(res.rating) > 6
                    );
                    setListOfRestaurant(filteredList);
                }}>
                    top rated resturant
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) =>
                        (<RestaurantCard key={restaurant.id} resData={restaurant}/>))
                }

            </div>
        </div>
    )
}


export default Body;
