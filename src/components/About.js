import UserClass from "./UserClass";
import User from "./User";
import UserContext from "./utils/UserContext";

const About = () => {
    return(
        <div>
            <div>
                Loggined User:
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-1xl font-bold">{loggedInUser}</h1>} 
                </UserContext.Consumer>
            </div>
            <UserClass name={"Eni"} location={"Georgia"} contact={"+995593949543"}/>
            <User name={"Eni2"} location={"Italy"} contact={"+3938273532"}/>
        </div>
    )
}

export default About;