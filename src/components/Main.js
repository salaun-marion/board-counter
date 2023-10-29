import { useState } from "react";
import Tinypanel from "./Tinypanel";
import Register from "./modal/Register";

export default function Main () {

    const[modal, setModal] = useState(false)
    const[count, setCount] = useState(0)

    const toggleModal = () => {
        setModal(!modal) 
    }

    const increment = () => {
        setCount(count+1)
    }

    const checkSubmission = () => {
        if (count > 0){
            increment()
        }else{
            toggleModal()
        }
    } 

    window.addEventListener('keydown',((e) => {
        if(e.key === 'Escape'){
            toggleModal()
        }
    }))
   
    return (
        <div className="wrap">
            <div className="bp-container">
                    <div className="bp-container-title">
                        <div className="progression-bar-red">
                            <div className="already-done-red"></div>
                        </div>
                        <h5>In backlog</h5>
                    </div>
                    <Tinypanel 
                        onCheck={checkSubmission}
                        counter={count}
                    />
            </div>
            {modal && (
                <div className="modal">
                    <div className= "overlay" onClick={toggleModal}>
                    </div> 
                    <Register 
                        onClose={toggleModal}
                        onVote={increment}
                    /> 
                </div>
            )}
        </div>
    )
} 
    

