import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constants";


const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        const getRestaurants = async () => {
            try{
                const data = await fetch(RESTAURANT_API);
                const json = await data.json();
                setRestaurants(json);
            } catch(error){
                console.log("Failed to fetch restaurants:", error);
            }
        }
            getRestaurants();
    },[])
            return restaurants;
}
export default useRestaurants;