
const Comment = ({ user, comment, date }) => {
    return(
        <div className="modal fade" id='modalCard' tabIndex="-1" aria-hidden="true" aria-labelledby='modalTitle'>
            <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='modalTitle'> titulo card </h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Cerrar'></button><div className='modal-body'>
                        <img> Img card </img>
                        <p>Description card</p>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='madal'>Cerrar</button>
                        <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Aceptar</button>
                    </div>
                    
                    </div>
                </div>
            </div>
                <h5 className="">{user}</h5>
                <div className="">
                    <p className="">{comment}</p>
                </div>
                <div>
                    <p className="">{date}</p>
                </div>
            {/* </div>   */}
        </div>
    )
}

export default Comment;