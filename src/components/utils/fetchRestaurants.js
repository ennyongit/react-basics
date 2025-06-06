export const fetchRestaurants= async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
             const json = await data.json();
                console.log(json);
                    const restaurantCard = json?.data?.cards?.find(
                        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    );
                        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                             return restaurants || [];
                }