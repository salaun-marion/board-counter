export default function Register(){
    return(

        <div className = "register-panel">
            <label className = "label-email" for="email">Enter your email</label>
            <img src = "./images/icons8-multiply-100.png"></img>
            <input type = "email" id="email" placeholder="Email address" size="30" required />
            <button className = "upvote"> Upvote </button>
        </div>
    )
}