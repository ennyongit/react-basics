import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    const {title} = data;
    console.log(data);
    return(
        <div className="w-2/3 mt-5">
        <div>
            <div>
              <h1 className="text-xl font-bold mt-1 p-5 cursor-pointer bg-gray-50">{title} ({data.itemCards.length})</h1>
            </div>
            <div>
              <ItemList items={data.itemCards}/>
        </div>
        </div>
        </div>
    )
}

export default RestaurantCategory;