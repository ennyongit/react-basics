import { useState, useEffect } from "react";
import { fetchRestaurants } from "./utils/fetchRestaurants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuSections, setMenuSections] = useState("");
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);
          const getRestaurantMenu = async () => {
            const restaurantMenu = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3266973&lng=82.9869733&restaurantId=${resId}`);
            const json = await restaurantMenu.json();
            console.log(json);

            {/** აქ მაქვს ის ობიექტი, რომელიც შეიცავს groupedCard-ს */}
            const findMenu = json?.data?.cards.find(
              (card) => card?.groupedCard)
                 console.log(findMenu);

                 {/**აქ მაქვს მთლიანი card ობიექტი რომელიც შეიიცავს itemCards */}
              const regularCards = findMenu?.groupedCard.cardGroupMap?.REGULAR?.cards;
              
              {/**აქ ინახება გაფილტრულიი cards array, ორმელიც შეიცავს itemCards */}
              const sections = regularCards.filter((card) => card?.card?.card?.itemCards) || [];
              console.log(sections);

                setMenuSections(sections);
          }


  if (!menuSections) return <Shimmer />;

      return(
        <div>
          <div className="menu text-center">
              {menuSections.map((section, index) => {
                const {title, itemCards} = section.card.card;
                return(
                  <div key={index}>
                      <h1 className="text-xl font-bold bg-slate-100 mt-1 p-2">{title} ({itemCards.length})</h1>
                      <ul>
                        {
                          itemCards.map((item) => {
                            return(
                            <li key={item.id}>{item.card.info.name}</li>
                            )
                          })
                        }
                      </ul>
                  </div>
                )
              })}      
          </div>
        </div>
      )

};

export default RestaurantMenu;
