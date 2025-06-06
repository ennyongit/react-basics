import { useState, useEffect } from "react";
import { fetchRestaurants } from "./utils/fetchRestaurants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);
          const getRestaurantMenu = async () => {
          const restaurants = await fetchRestaurants();

          const individualRestaurant = restaurants.find(
                (res) => res.info.id === resId
            );
                setResInfo(individualRestaurant);
                console.log(individualRestaurant);
          }


  if (!resInfo) return <Shimmer />;

  const { name, areaName, avgRatingString} = resInfo.info;

  return (
    <div className="menu text-center">
      <h1 className="font-bold m-2 bg-gray-100 p-2 text-2xl rounded cursor-pointer">
        {name}
      </h1>
      <p className="">Location: {areaName}</p>
      <p>Rating: {avgRatingString}</p>
    </div>
  );
};

export default RestaurantMenu;
