import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './src/components/About';

/**
 * Header (logo, nav-item)
 * Body
 * - Search (input, button)
 * - Restaurant Container 
 *    - (restaurand cards)
 *       - img
 *       - description
 *       - star
 *       - title
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * */ 

const AppLayout = () => {
    return(
        <div className='app'>
           <Header/>
           <Body/>
        </div>
    )
}

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>
    },
    {
        path: "/about",
        element: <About/>
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