import { useEffect, useState } from "react";
import Register from "./modal/Register";

export default function Tinypanel({title,description,logo}){
    const[modal, setModal] = useState(false)
    const[count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const toggleModal = () => {
        setModal(!modal) 
    }

    const checkSubmission = () => {
        if(count>0){
            increment()
        }else{
            toggleModal()
        }
    }

    useEffect(() => {
        const EscapeKey = (event) => {
            if (event.key === 'Escape') {
                if (modal) {
                    toggleModal()
                }
            }
        }
        window.addEventListener('keydown', EscapeKey)
        return () => {window.removeEventListener('keydown', EscapeKey)}

    }, [modal]) 

    return(
        <div className="wrapper">
            <div className = "tiny-container">
                <span className="tiny-container-title">
                    <button className="counter" type="button" id="counter" onClick={checkSubmission}> {count} </button>
                    <h5 className="tiny-title">{title}</h5>
                    <h4 className={`tiny-pro-${logo}`}>PRO</h4>
                </span>
                <p>{description}</p>     
            </div>  
            {modal && (
                <div className="modal">
                    <div className= "overlay" onClick={toggleModal}>
                    </div> 
                    <Register 
                        onVote={increment}
                        onClose={toggleModal}
                    /> 
                </div>
            )}
        </div>
    )
}
