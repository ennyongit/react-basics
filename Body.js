import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="MacDonald's"/>
                <RestaurantCard resName="KFC"/>
            </div>
        </div>
    )
}

export default Body;