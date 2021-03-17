import react from 'react'


function Error({errorMessage}){
    return (
        <div className="container" style={{height: "100vh", alignItems:"center", flexDirection :"column", display:"flex"}}>
            <div className="row">{errorMessage}</div>
            <div className="row">
                Oop!! We are facing some issues.
            </div>
            <div className="row">
                Please comeback later.
            </div>

        </div>

    )
}
export default Error;