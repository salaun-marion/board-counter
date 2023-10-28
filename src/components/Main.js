import React, { useState } from "react";
import Tinypanel from "./Tinypanel";
import Register from "./modal/Register";

export default function Main () {

    const[modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const close = (e) => {
        if(e.key === 'Escape'){
        toggleModal()
        }
    }
    window.addEventListener('keydown', close)
   
    return (
        <div className="wrap">
            <div className="bp-container">
                    <div className="bp-container-title">
                        <div className="progression-bar-red">
                            <div className="already-done-red"></div>
                        </div>
                        <h5>In backlog</h5>
                        
                    </div>
                    <Tinypanel onClick={toggleModal}/>
            </div>
            {modal && (
                <div className="modal">
                    <div className= "overlay" onClick={toggleModal}>
                    </div> 
                    <Register onClick={toggleModal}/> 
                </div>
            )}
        </div>
    )
} 
    

