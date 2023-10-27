// const Container = ({ children }) => <div className="tiny-container">{children}</div>

export default function Tinypanel(){
    return(
        <div className = "tiny-container">
            <div className="tiny-container-title">
                <button type="button" id="counter"> 1 </button>
                <h5>Custom Fields</h5>
                <h4>PRO</h4>
            </div>
            <p> Add custom fields to your passwords.</p>
        </div>
    )
}
