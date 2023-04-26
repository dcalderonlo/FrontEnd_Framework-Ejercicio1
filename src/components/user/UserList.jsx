import { useEffect, useState } from 'react';
import User from './User';
import getUser from '../../Services/UserService';

const UserList = () => {
    const [ user, setUser ] = useState([]);
    const [loading, setLoading] = useState(true);

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
                </>
            )}
        </>
    );

    
}

export default UserList;