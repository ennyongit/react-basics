import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import './index.css'
import { Provider } from 'react-redux';
import appStore from './src/components/utils/appStore';
import Cart from './src/components/Cart';
import UserContext from './src/components/utils/UserContext';
import { useState, useEffect } from 'react';

const AppLayout = () => {

    const [userName, setUserName] = useState();

    // Authentication 

    useEffect(() => {
        const data = {
            name: "Eni Bondarenko"
        };
        setUserName(data.name)
    }, []);

    return(
        // UserContext.Provider is used to provide data to all components in the application
       <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            {/* Provider is used to provide the store to all components in the application */}
            <Provider store={appStore}>
                <div className='app'>
                <Header/>
                <Outlet/>
                </div>
            </Provider>
      </UserContext.Provider> 
    )
}

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            { // url parameter: resId
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
   ],
        errorElement: <Error/>
    }
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);














// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id:"child"}, [
//         React.createElement("h1", {}, "i'm html tag"),
//         React.createElement("h2", {}, "i'm html tag 2"),
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {}, "i'm htm tag"),
//         React.createElement("h2", {}, "i'm html tag") 
//     ])
// ])