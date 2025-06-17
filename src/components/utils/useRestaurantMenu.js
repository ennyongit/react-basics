import { useEffect, useState } from "react";
{/**abrunebs whole api-s */}

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);
          const getRestaurantMenu = async () => {
            const restaurantMenu = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6110886&lng=77.2345184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await restaurantMenu.json();
            setResMenu(json);
          
          }
          
          return resMenu;
}


export default useRestaurantMenu;