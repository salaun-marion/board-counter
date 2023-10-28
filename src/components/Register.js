

export default function Register(){
    return(

        <div className = "register-panel">
            <div className="register-title">
                <label className = "label-email" for="email">Enter your email</label>
                <button className="close-icon">      
                    <svg xmlns="http://www.w3.org/2000/svg"  height="12"  width="12" viewBox="0 0 24 24" focusable="false" style={{ backgroundColor: "black", border: "none", shapeRendering: "smooth"}}>
                        <path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z" fill="white">
                        </path>
                    </svg> 
                </button>
            </div>
            <div className="form">
                <input type = "email" id="email" placeholder="Email address" size="30" required />
                <button className = "upvote"> Upvote </button>
            </div>
           
        </div>
    )
}