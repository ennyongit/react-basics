import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(RestaurantList);
    const [filteredRestaurant, setFilteredRestaurant] = useState(RestaurantList);
    const [inputText, setInputText] = useState("");

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1 className="onlineStatus">Please Check Your Connection!</h1>;
    return(
        <div className="body mt-10">
            <div className="filter flex gap-5">
                <div className="search flex gap-2">
                    <input type="text" 
                    className="search-box border p-2 focus:outline-none rounded-md" 
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                    />
                    <button className="search-btn border border-gray-300 hover:bg-gray-50 p-2 rounded-md" onClick={()=>{
                        // filter and update ui
                         let filteredRestaurant = listOfRestaurant.filter((res) => 
                           res.title.toLowerCase().includes(inputText.toLowerCase()));
                         setFilteredRestaurant(filteredRestaurant);
                        console.log(inputText);
                    }}>Search
                    </button>
                </div>
                <button className="filter-btn border hover:bg-gray-50 p-2 rounded-md" onClick={() => {
                    let filteredList = listOfRestaurant.filter(
                        (res) => parseFloat(res.rating) > 6
                    );
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container mt-10 flex gap-[20px]">
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
