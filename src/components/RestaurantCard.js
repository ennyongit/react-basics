const RestaurantCard = ({resData}) => {
    return (
        <div className="res-card border border-transparent hover:border-gray-300 p-1">
            <img 
                className="res-img w-60 h-60 object-cover" 
                alt="res-img"
                src={resData.imgId}/>
            <h3 className="title">{resData.title}</h3>
            <h4 className="cuisine">{resData.cuisine}</h4>
            <h4 className="star">{resData.rating} Star</h4>
            <h4 className="del-time">{resData.delivery}</h4>
        </div>
    )
}

export default RestaurantCard;