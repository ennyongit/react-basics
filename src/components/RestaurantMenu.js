import { useState, useEffect } from "react";
import useRestaurants from "./utils/useRestaurants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [itemSection, setItemSection] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  useEffect(() => {

    if(resMenu){
              
              const groupedCards = resMenu?.data?.cards.find(card => card?.groupedCard);

              const cards = groupedCards?.groupedCard.cardGroupMap?.REGULAR?.cards;
        
              const itemCards = cards.filter(card => card?.card?.card?.itemCards) || [];

              setItemSection(itemCards);
    }

    console.log(itemSection);

  }, [resMenu]);


  if (!itemSection) return <Shimmer />
      return(
       <div className="flex flex-col items-center">
           {/**categoriws accordion */}
          {itemSection.map((category, index) => 
          <RestaurantCategory 
          key={category?.card?.card?.title}
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
          />
          )}
       </div>

      )

};

export default RestaurantMenu;
