import React from "react";
import ReactDOM from "react-dom";
// import Heading from "./Heading.jsx"
// import List from "./List"

import App from "./components/App";
// function Heading(){
//   return<h1>My Favourite Foods</h1>;
// }
// ReactDOM.render(
//   <div>
//     <Heading/>
//     {/* <h1>My Favourite Foods</h1> */}
//     {/* <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul> */}
//     <List/>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
