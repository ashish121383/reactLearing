/**
 * 
 * 
 * 
 * <div class="parent">
 *     <div class="child">
 *        <h1>I am tag 1</h1>
 *     </div>
 * </div>
 */

const parent = React.createElement("div",{className:"parent"}, 
    [
        React.createElement("div",{className:"child"}, [React.createElement("h1",{},"I am tag 1"),React.createElement("h2",{},"I am tag h2")]),
        React.createElement("div",{className:"child1"}, [React.createElement("h1",{},"I am tag 1"),React.createElement("h2",{},"I am tag h2")])
    ]);
//object is place will give you attributes of tag
const heading = React.createElement("h1",{id:"heading"},'I am creating my self');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);