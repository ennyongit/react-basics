import { useState, useEffect } from "react";
import { useParams } from "react-router";


const RestaurantMenu = () => {
    // gets id from route context (matched id)
    const { resId } = useParams();

    // ეს არის რესტორნის ლისტები, აქ ამის მაგიერ უნდა წამოვიღო ფეჩით.
    const restaurants = RestaurantLists();
    const restaurant = restaurants.find((r) => r.id === resId);
   

    const {title, cuisine, menu} = restaurant.resInfo;
    const {category} = menu;

    return(
        <div className="menu text-center">
             <h1 className="font-bold m-2 bg-gray-100 p-2 text-2xl rounded cursor-pointer">{title}</h1>
        </div>
    )
}

export default RestaurantMenu;