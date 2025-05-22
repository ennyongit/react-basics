const RestaurantCard = ({resData}) => {

    return (
        <div className="res-card">
            <img 
                className="res-img" 
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