import './c-user.css'

const User = ({ img, user, nickName, description }) => {
    return (
        <div className="d-flex c-profile">
            <img src={ img } className="c-profile-img" alt="..." />
            <div className='fs-1 fw-bold'>{ user }</div>
            <div className='fs-4 fw-bolder'>{ nickName }</div>
            <div className='fs-6 text-muted'>{ description } </div>
        </div>
    )
}

export default User;