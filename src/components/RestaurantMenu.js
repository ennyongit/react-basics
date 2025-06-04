import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

         const restaurantInfo =
             json?.data.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;
                 setResInfo(restaurantInfo);
    }

       
       if (!resInfo) return <Shimmer />;

          const { name, cuisines, costForTwo, cloudinaryImageId } = resInfo;

    return(
        <div className="menu text-center">
             <h1 className="font-bold m-2 bg-gray-100 p-2 text-2xl rounded cursor-pointer">{name}</h1>
                <p>{cuisines?.join(", ")}</p>
                    <p>Cost for two: {costForTwo}</p>
        </div>
    )
}

export default RestaurantMenu;