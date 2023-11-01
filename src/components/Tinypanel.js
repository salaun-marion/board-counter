import { useEffect, useState } from "react";
import Register from "./modal/Register";

export default function Tinypanel({title,description,logo,email,counters}){
    const[modal, setModal] = useState(false)
    const[count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const toggleModal = () => {
        setModal(!modal) 
    }

    const checkSubmission = () => {
        if(email.current){
            increment()
        }else{
            toggleModal()
        }
    }

    const getMail = (mail) => {
        email.current=mail
        increment()
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
    }) 

    return(
        <div className="wrapper">
            <div className = "tiny-container">
                <span className="tiny-container-title">
                    <button className="counter-box" type="button" id="counter" onClick={checkSubmission}> 
                        <div className="counter-text">
                            <div className="icon-chevron">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    height="0.8em" 
                                    viewBox="0 0 512 512"
                                    style={{
                                        backgroundColor: "#1F1F1F"
                                    }}
                                >
                                    <path 
                                        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                                        fill="white"    
                                        />
                                </svg>
                            </div>
                            <div className="counter">{count}</div>
                        </div>
                    </button>
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
                        onVote={getMail}
                        onClose={toggleModal}
                    /> 
                </div>
            )}
        </div>
    )
}
