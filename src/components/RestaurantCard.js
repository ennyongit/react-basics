const RestaurantCard = ({resData}) => {
    return (
        <div className="res-card border border-transparent hover:border-gray-300 p-1 rounded-md">
            <img 
                className="res-img w-60 h-60 object-cover" 
                alt="res-img"
                src={resData.imgId}/>
            <h3 className="title font-bold text-lg">{resData.title}</h3>
            <h4 className="cuisine">{resData.cuisine}</h4>
            <h4 className="star">{resData.rating} Star</h4>
            <h4 className="del-time">{resData.delivery}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-md p-1">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;