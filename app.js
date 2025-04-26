// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "i'm html tag"),
        React.createElement("h2", {}, "i'm html tag 2"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "i'm htm tag"),
        React.createElement("h2", {}, "i'm html tag") 
    ])
])