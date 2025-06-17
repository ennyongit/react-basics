import { useState, useEffect } from "react";
import useRestaurants from "./utils/useRestaurants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [menuSection, setMenuSections] = useState([]);
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  useEffect(() => {

    if(resMenu){
                {/** აქ მაქვს ის ობიექტი, რომელიც შეიცავს groupedCard-ს */}
            const findMenu = resMenu?.data?.cards.find(card => card?.groupedCard);
            console.log(findMenu);

                 {/**აქ მაქვს მთლიანი card ობიექტი რომელიც შეიიცავს itemCards */}
              const groupedCards = findMenu?.groupedCard.cardGroupMap?.REGULAR?.cards;
              console.log(groupedCards);
              
              {/**აქ ინახება გაფილტრულიი cards array, ორმელიც შეიცავს itemCards */}
              const section = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
              console.log(section);

              setMenuSections(section);
    }

  }, [resMenu]);


  if (!menuSection) return <Shimmer />;
              function handleClick() {
                  console.log("CLICKED");
              }
      return(
        <div>
          <div className="menu text-center">
              {menuSection.map((section, index) => {
                const {title, itemCards} = section.card.card;
                return(
                  <div key={index}>
                      <h1 className="text-xl font-bold bg-slate-100 mt-1 p-2 cursor-pointer" 
                      onClick={() => handleClick()}
                      >{title} ({itemCards.length})
                        
                      </h1>
                      <ul>
                        {
                          itemCards.map((item) => {
                              const {name, price, imageId, id, description} = item.card.info;
                            return(
                            <li key={id}>
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
