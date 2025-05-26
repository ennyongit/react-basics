import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

         this.state = {
            userInfo: {
                name: "Pedro",
                location: "France",
                avatar_url: "'https://avatars.githubusercontent.com/u/182110228?v=4"
            }
         }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ennyongit");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }
    
    render(){
        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <img src={avatar_url} width={200} height={200}/>
            </div>
        )
    }
}

export default UserClass;