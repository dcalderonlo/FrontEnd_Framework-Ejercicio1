import User from './User';
import getUser from '../../Services/UserService';
import { useContext } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/RouteContext';
import AccessService from '../../Services/AccessService';

const UserList = () => {
    
    const [ user, setUser ] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        
        try {
            AccessService.logoutSession();
            setAuth(false);
            navigate('/logout');
        } catch (error) {
            alert('An error ocurred'+ error );
        }
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getUser().then((data) => {
                setUser(data);
                setLoading(false);
            })
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return(
        <>
            {loading ? (
            <p className="d-flex justify-content-center align-items-center p-5 fs-4 fw-bold">
                Loading...
            </p>
            ) : (
                <>
                    {user.map((user, i) => (
                        <User
                            key = { i }
                            img = { user.img }
                            user = { user.user }
                            nickName = { user.nickName }
                            description = { user.description }
                        />
                    ))}
                    <div className='d-flex justify-content-center m-4'>
                        <button type="button" className="btn btn-danger" onClick={() => { handleLogout() }}>LOGOUT</button>
                    </div>
                </>
            )}
        </>
    );

    
}

export default UserList;