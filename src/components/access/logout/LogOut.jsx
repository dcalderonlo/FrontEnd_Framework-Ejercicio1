import './c-logout.css'
import { Link } from 'react-router-dom'

const LogOut = () => {

    return(
        <>
            <div className="container-fluid d-flex container-size">
                <div className="container d-flex container-flex">
                    <div className="">
                        <div className="font-size font-style">
                            <p>See you later!</p>
                        </div>
                        <div className="fs-2">
                            <p>We hope you come back soon! ;)</p>
                        </div>
                    </div>
                    <div className='m-4 c-button-style'>
                        <Link to='/logout' type="button" className="btn btn-primary">LOGIN</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogOut;