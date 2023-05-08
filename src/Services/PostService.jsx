// import data from "../data/post.json";
import axios from "axios";

const getPosts = async () => {
    const token = localStorage.getItem("myThreePicsToken");
  
    const headers = {
      "Authorization": `Bearer ${token}`,
    };
  
    try {
      const response = await axios.get(
        `https://three-points.herokuapp.com/api/posts`,
        { headers: headers }
      );
      return response.data
  
    } catch (error) {
      if (error.status === 401) {
        localStorage.removeItem("myThreePicsToken");
      }
      console.log(error)
    }
  
}

export default  getPosts;