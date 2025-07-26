import { createContext } from "react";

// context is global object where data is kept and every component can access it
// მაგალითად მონაცემია ისეთი, რომელიც მთელს აპლიკაციაში გვჭირდება რომ იყოს ხელმისაწვდომი ყველა კომპონენტისთვის?(logged in user, theme, language, etc.)
// global object to hold user information
// can be used to provide user data across the application
// we hold this data inside a context and use it anywhere in our application
// useContext sloves prop drilling problem
// we keep data in central place and use it in any component

// useContext ვიყენებთ როდესაც ბევრ ადგილას გვჭირდება იგივე მონაცემი

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;