import { useState, useEffect } from "react";
import RestaurantLists from "./RestaurantList";
import { useParams } from "react-router";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurants = RestaurantLists();
    const restaurant = restaurants.find((r) => r.id === resId);
    console.log(resId);

    const {title, cuisine, menu} = restaurant.resInfo;
    const {items} = menu;

    return(
        <div className="menu">
            <h1>{title}</h1>
            <h3>{cuisine}</h3>
            <h2>Menu</h2>   
           <ul>
                {items.map((item) => {
                return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;