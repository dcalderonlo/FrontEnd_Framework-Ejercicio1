import "./c-login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from '../../../Context/RouteContext'
import AccessService from "../../../Services/AccessService"

const LogIn = () => {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    
    return(
        <>
            <main className='d-flex form-size'>
                <section className='container d-flex flex-column section-center'>
                    <div className='fs-1'>
                        <FontAwesomeIcon icon={ faUser } />
                    </div>
                    <div>
                        <h3>Log In</h3>
                    </div>
                        <form className="form-center"
                            onSubmit={ event => {
                                event.preventDefault();

                                const form = event.target;

                                AccessService.loginSession( form.user.value, form.pass.value )
                                .then(() => {
                                    setAuth(true)
                                    navigate('/home');
                                })
                                .catch((error) => {
                                    alert('An error occurred: '+ error)
                                    navigate('/login');
                                })
                            }}
                        >
                            <div className="mb-3">
                                <input type="user" name='user' className="form-control" id="user" aria-describedby="userHelp" placeholder="User ID"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" name='pass' className="form-control" id="password" placeholder="Password"/>
                                <div id="userHelp" className="form-text">We'll never share your information with anyone else.</div>
                            </div>
                            <button type="submit" className="btn btn-primary">LOGIN</button>
                        </form>
                </section>
            </main>
        </>
    )
}

export default LogIn;