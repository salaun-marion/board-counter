import React from "react"
import { createRoot } from 'react-dom/client'
import "./styles/font.css";
import "./styles/style.css";

import Header from "./components/Header";
import Main from "./components/Main";

const container = document.getElementById("root")
const root = createRoot(container); 

root.render(
    <div>
        <Header/>
        <Main/>
    </div>
)
