import RestaurantCard from "./RestaurantCard";

const resObject = [
{
    id: "1",
    title: "MacDonald's",
    cuisine: "American Burgers",
    rating: 6.1,
    delivery: "39min",
    imgId: "https://www.foodandwine.com/thmb/8N5jLutuTK4TDzpDkhMfdaHLZxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"
},
{
    id: "2",
    title: "KFC",
    cuisine: "American Chicken Burgers",
    rating: 5.4,
    delivery: "24min",
    imgId: "https://citynews-milanotoday.stgy.ovh/~media/square-mid/15594032522318/kfc_rex_716_cover-2.jpg"
},
{
    id: "3",
    title: "FiveGuys",
    cuisine: "American Burgers",
    rating: 5.9,
    delivery: "39min",
    imgId: "https://tb-static.uber.com/prod/image-proc/processed_images/4cab48192e564746535574989e0d8c71/885ba8620d45ab36746a0e8c7b85ee66.jpeg"
}

];
const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button onClick={() => {
                    let listOfRestaurants = resObject.filter(
                        (res) => parseFloat(res.rating) > 5
                    );
                    console.log(listOfRestaurants);
                }}>
                    top rated resturant
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resObject.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;
