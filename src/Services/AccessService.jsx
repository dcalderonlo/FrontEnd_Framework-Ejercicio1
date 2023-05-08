import axios from "axios";

const loginSession = async (user, pass) => {

    return axios
        .post("https://three-points.herokuapp.com/api/login", {
            username:`${user}`, password:`${pass}`
        })
        .then((response) => {
            localStorage.setItem('myThreePicsToken', response.data.token)

            return response
        })
        .catch ((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem("myThreePicsToken");
            }
            return Promise.reject(error);
        })
}

const logoutSession = () => {
    localStorage.removeItem("myThreePicsToken");
}

const AccessService = { loginSession, logoutSession, }

export default AccessService



//     try {
//         const headers = {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//         };

//         const response = await axios.post(
//             "https://three-points.herokuapp.com/api/login",
//             `{"username":"${user}", "password":"${pass}"}`,
//             // `{"username":"jhon", "password":"P4ssW0rd!#"}`,
//             { headers: headers }
//         );

//         if (response.data.token) {
//             localStorage.setItem("myThreePicsToken", response.data.token);
//             return response.data.token;
//         } else {}
//             return "";
//     } catch (error) {
//         if (error.response) {
//             console.log(error.response)
//         }
//         // alert(error)
//         return "";
//     }
