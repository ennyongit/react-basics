const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img 
                className="res-img" 
                alt="res-img"
                src="https://www.foodandwine.com/thmb/8N5jLutuTK4TDzpDkhMfdaHLZxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"/>
            <h3 className="title">{props.resName}</h3>
            <h4 className="description"></h4>
            <h4 className="cuisine">American</h4>
            <h4 className="star">5.5 stars</h4>
            <h4 className="del-time">38min</h4>
        </div>
    )
}

export default RestaurantCard;