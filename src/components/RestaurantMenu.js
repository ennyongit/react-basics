import { useState, useEffect } from "react";
import { fetchRestaurants } from "./utils/fetchRestaurants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuSection, setMenuSections] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);
          const getRestaurantMenu = async () => {
            const restaurantMenu = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6110886&lng=77.2345184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await restaurantMenu.json();
            console.log(json);

                  {/** აქ მაქვს ის ობიექტი, რომელიც შეიცავს groupedCard-ს */}
            const findMenu = json?.data?.cards.find(card => card?.groupedCard);
            console.log(findMenu);

                 {/**აქ მაქვს მთლიანი card ობიექტი რომელიც შეიიცავს itemCards */}
              const groupedCards = findMenu?.groupedCard.cardGroupMap?.REGULAR?.cards;
              console.log(groupedCards);
              
              {/**აქ ინახება გაფილტრულიი cards array, ორმელიც შეიცავს itemCards */}
              const section = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
              console.log(section);

              setMenuSections(section);

          }


  if (!menuSection) return <Shimmer />;

      return(
        <div>
          <div className="menu text-center">
              {menuSection.map((section, index) => {
                const {title, itemCards} = section.card.card;
                return(
                  <div key={index}>
                      <h1 className="text-xl font-bold bg-slate-100 mt-1 p-2">{title} ({itemCards.length})</h1>
                      <ul>
                        {
                          itemCards.map((item) => {
                              const {name, price, imageId, description} = item.card.info;
                            return(
                            <li key={item.card.info.id}>
                                <div className="">{name}</div>
                                <div className="">{price}</div>
                                <img className="w-60 h-60" src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}/>
                            </li>
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
