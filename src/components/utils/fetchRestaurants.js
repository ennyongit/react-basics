export const fetchRestaurants= async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6110886&lng=77.2345184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
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