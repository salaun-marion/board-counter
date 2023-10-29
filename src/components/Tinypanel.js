
export default function Tinypanel({onCheck,counter}){
    return(
        <div className = "tiny-container">
            <span className="tiny-container-title">
                <button className="counter" type="button" id="counter" onClick={onCheck} > {counter} </button>
                <h5 className="tiny-title">Custom Fields</h5>
                <h4 className="tiny-PRO">PRO</h4>
            </span>
            <p> Add custom fields to your passwords.</p>     
        </div>       
    )
}
