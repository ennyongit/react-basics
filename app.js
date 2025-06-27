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

const AppLayout = () => {
    return(
    <Provider store={appStore}>
        <div className='app'>
           <Header/>
           <Outlet/>
        </div>
    </Provider>
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