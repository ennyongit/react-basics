<div className="menu text-center">
{menuSection.map((section, index) => {
  const {title, itemCards} = section.card.card;
  return(
    // categories accordion
    <div key={index}>
        <h1 className="text-xl font-bold bg-slate-100 mt-1 p-2 cursor-pointer" 
          >{title} 
          ({itemCards.length})
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
