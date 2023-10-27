import React from "react"
import { createRoot } from 'react-dom/client'
import "./font.css";
import "./style.css";

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
