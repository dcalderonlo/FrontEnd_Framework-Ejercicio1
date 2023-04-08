
const Comment = ({ user, comment, date }) => {
    return(
        <div className="container">
            <div className="card m-3" style={{ width: "18rem" }}>
                <h5 className="">{user}</h5>
                <div className="">
                    <p className="">{comment}</p>
                </div>
                <div>
                    <p className="">{date}</p>
                </div>
            </div>  
        </div>
    )
}

export default Comment;