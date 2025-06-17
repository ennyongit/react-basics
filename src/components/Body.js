import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import useRestaurants from "./utils/useRestaurants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [inputText, setInputText] = useState("");

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1 className="onlineStatus">Please Check Your Connection!</h1>;


    const restaurantsApi = useRestaurants();

    useEffect(() => {
            const cardsArray = restaurantsApi?.data?.cards;
            if(!cardsArray) return;
            const card = cardsArray.find((res) => res.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
            
    },[restaurantsApi])

    console.log(listOfRestaurant);
    
    if (listOfRestaurant.length === 0) return <Shimmer />;
    return (
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
                           res.info.name.toLowerCase().includes(inputText.toLowerCase()));
                         setFilteredRestaurant(filteredRestaurant);
                        console.log(inputText);
                    }}>Search
                    </button>
                </div>
                <button className="filter-btn border hover:bg-gray-50 p-2 rounded-md" onClick={() => {
                    let topRated = listOfRestaurant.filter(
                        (res) => parseFloat(res.info.avgRating) > 4
                    );
                    setFilteredRestaurant(topRated);
                }}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container mt-10 flex flex-wrap justify-between">
                {
                    !filteredRestaurant?.length ? <Shimmer /> :(
                    filteredRestaurant.map((restaurants) =>(
                    <Link 
                     key={restaurants.info.id}
                     to={"/restaurants/" + restaurants.info.id}
                     >
                        {
                             <RestaurantCard resData={restaurants} key={restaurants.info.id}/>
                        }
                    
                    </Link>
                ))
                )}
            </div>
        </div>
    )
}


export default Body;
