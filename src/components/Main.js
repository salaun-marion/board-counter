const Wrap = ({ children }) => <div className="wrap">{children}</div>

export default function Main () {
    return(
        <Wrap>
            <div className="bp-container">
                    <div className="bp-container-title">
                        <div className="progression-bar-red">
                            <div className="already-done-red"></div>
                        </div>
                        <h5>In backlog</h5>
                    </div>
            </div>
        </Wrap>
    )
} 
    

