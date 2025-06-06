import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { fetchRestaurants } from './utils/fetchRestaurants';
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [inputText, setInputText] = useState("");

        useEffect(() => {
            getRestaurants();
        },[])
            const getRestaurants = async () => {
                const restaurants = await fetchRestaurants();
                setListOfRestaurant(restaurants);
                setFilteredRestaurant(restaurants);
            }
    // return new component which has label inside it
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1 className="onlineStatus">Please Check Your Connection!</h1>;

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
                    filteredRestaurant.map((restaurant) =>(
                    <Link 
                     key={restaurant.info.id}
                     to={"/restaurants/" + restaurant.info.id}
                     >
                        {
                             <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                        }
                    
                    </Link>
                ))
                )}
            </div>
        </div>
    )
}


export default Body;
