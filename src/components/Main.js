import { useState } from "react";
import Tinypanel from "./Tinypanel";
import BackPanel from "./Backpanel";
import Register from "./modal/Register";
import {v4 as uuidv4} from 'uuid';

export default function Main () {

    const[modal, setModal] = useState(false)
    const[count, setCount] = useState(0)
    const[tinypanels, setTinyPanel] = useState([
        {
            title:"Custom Fields",
            description:"Add custom fields to your passwords.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Secure files & notes",
            description:"Store other secrets than a password such as notes.",
            pro_off_on:"off",
            counter:0
        }
    ]);

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
            <BackPanel
                title = "In Backlog"
                color="red"
                card = {
                    tinypanels.map((tinypanel)=> {
                        return(
                            <Tinypanel 
                                key={uuidv4()}
                                title={tinypanel.title}
                                description={tinypanel.description}
                                pro_off_on={tinypanel.pro_off_on}
                                count={tinypanel.counter}
                                submitted={checkSubmission}
                            />
                        )
                    })
                }
            />
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


