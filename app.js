import React from 'react';
import ReactDOM from 'react-dom/client';
import css from './src/style.css'

const App = () => {
    return(
        <>
        <div className='menuContainer'>
            <ul className='menu'>
            <a href=""><li>Apartments</li></a>
            <a href=""><li>Hotels</li></a>
            <a href=""><li>Lands</li></a>
            <a href=""><li>Tours</li></a>
            <a href=""><li>WebPages</li></a>
            <a href=""><li>Charity</li></a>
            </ul>
        </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);














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