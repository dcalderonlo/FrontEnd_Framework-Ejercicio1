import Comment from './Comment';

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
        <>
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
        </>
        
    );
}

export default CommentsList;