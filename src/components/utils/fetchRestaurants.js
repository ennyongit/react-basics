import { RESTAURANT_API } from "./constants";
export const fetchRestaurants= async () => {
    const data = await fetch(RESTAURANT_API); 
             const json = await data.json();
                console.log(json);
                {/**es poulobs cards romelic sheicavs restaurantebs anu gvadzlevs mtlian card object-s */}
                    const restaurantCard = json?.data?.cards?.find(
                        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    );
                    console.log(restaurantCard);
                    {/**es ushualod restaurantebze wvdomas madzlevs */}
                        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                            console.log(restaurants);
                             return restaurants || [];
                 
                }