const Savarjisho = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
       //0 {title: 'Apple', content: "Red fruit"},
       {title: 'Banana', content: "Yellow fruit"}
    ]

    return(
        <div>
            {
                items.map((item, index) => {
                    return(
                        <div key={index}> 
                            <button>
                                {item.title}
                            </button>

                            <div>
                                {item.content}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}