import UserClass from "./UserClass";
import User from "./User";

const About = () => {
    return(
        <div>
            <UserClass name={"Eni"} location={"Georgia"} contact={"+995593949543"}/>
            <User name={"Eni2"} location={"Italy"} contact={"+3938273532"}/>
        </div>
    )
}

export default About;