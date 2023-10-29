export default function Tinypanel({title,description,pro_off_on,submitted, count}){

    return(
        <div className = "tiny-container">
            <span className="tiny-container-title">
                <button className="counter" type="button" id="counter" onClick={submitted} > {count} </button>
                <h5 className="tiny-title">{title}</h5>
                <h4 className={`tiny-pro-${pro_off_on}`}>PRO</h4>
            </span>
            <p>{description}</p>     
        </div>       
    )
}
