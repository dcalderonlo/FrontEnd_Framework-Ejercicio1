import data from "../data/user.json";

const getUser = () => {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data.user)
        },/* Math * */ 3000);
    })

}

export default getUser;