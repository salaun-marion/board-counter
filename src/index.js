import React from "react"
import { createRoot } from 'react-dom/client'
import "./styles/font.css";
import "./styles/style.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";

const container = document.getElementById("root")
const root = createRoot(container); 


// class App extends React.Component {
//     state = { fadingOut: false }
//     fadeOut = () => this.setState({fadingOut: true});
  
//     render() {
//       return (
//         <div style={this.state.fadingOut?{filter:'blur(2px)'}:false }>
//             <Header/>
//             <Main/>
//         </div>
//       )
//     }
// }


root.render(
    <div>
        <Header/>
        <Main/>
        <Register/>
    </div>
)
