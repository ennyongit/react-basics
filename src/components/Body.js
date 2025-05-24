import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(RestaurantList);
    const [filteredRestaurant, setFilteredRestaurant] = useState(RestaurantList);
    const [inputText, setInputText] = useState("");

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
                         let filteredRestaurant = listOfRestaurant.filter((res) => 
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
                    filteredRestaurant.map((restaurant) =>(
                    <Link 
                     key={restaurant.id}
                     to={"/restaurants/" + restaurant.id}>
                     <RestaurantCard resData={restaurant}/>
                    </Link>
                ))
                }

            </div>
        </div>
    )
}


export default Body;
