const RestaurantCard = ({resData}) => {
    const {name, cloudinaryImageId, cuisines, avgRating} = resData.info;
    return (
        <div className="res-card border border-transparent hover:border-gray-300 p-1 rounded-md w-64 divide-transparent">
            <img 
                className="res-img w-60 h-60 object-cover" 
                alt="res-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
               />
            <h3 className="title font-bold text-lg">{name}</h3>
            <h4 className="cuisine w-200">{cuisines.join(", ")}</h4>
            <h4 className="star">{avgRating} Star</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => { /**new component returned with promoted label on top of it */
        return (
            <div>
                <label className="absolute bg-black text-white rounded-md p-1">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;