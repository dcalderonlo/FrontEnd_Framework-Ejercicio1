import Comment from '../comment/Comment';

const comments = [
    {//1
        user: "User 1",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//2
        user: "User 2",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//3
        user: "User 3",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//4
        user: "User 4",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//5
        user: "User 5",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//6
        user: "User 6",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//7
        user: "User 1",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//8
        user: "User 2",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//9
        user: "User 3",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//10
        user: "User 1",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//11
        user: "User 2",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
    {//12
        user: "User 3",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia debitis expedita
                saepitaque perspiciatis esse officia aliquam doloribus non et quasi atque quos consequuntur
                obcaecati praesentium ut, hic vel.`,
        date: "",
    },
  ];

const CommentsList = () => {
    return(
        <div className="modal fade" id='modalCard' tabIndex="-1" aria-hidden="true" aria-labelledby='modalTitle'>
            <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='modalTitle'> titulo card </h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Cerrar'></button>
                        {
                            comments.map((commentary, i) => (
                                <Comment
                                    key = { i }
                                    user = { commentary.user }
                                    comment = { commentary.comment }
                                    date = { commentary.date }
                                />
                            ))
                        }
                    </div>
                    <div className='modal-body'>
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
    );
}

export default CommentsList;