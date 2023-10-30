export default function BackPanel ({ color,title, card}){
    return(
        <div className="bp-container">
            <div className="bp-container-title">
                <div className={`progression-bar-${color}`}>
                    <div className={`already-done-${color}`}></div>
                </div>
                <h5>{title}</h5>
            </div>
            <>
                {card}
            </>
        </div>
    )
}