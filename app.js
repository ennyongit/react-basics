import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header (logo, nav-item)
 * Body
 * - Search (input, button)
 * - Restaurant Container (restaurand cards)
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * */ 

const AppLayout = () => {
    return(
        <div className='app'>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();














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