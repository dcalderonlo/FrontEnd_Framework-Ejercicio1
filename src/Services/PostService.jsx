import data from "../data/post.json";

const getPost = () => {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data.post)
        },/* Math * */ 3000);
    })

}

export default getPost;