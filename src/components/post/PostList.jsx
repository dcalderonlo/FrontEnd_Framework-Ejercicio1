import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import GetPosts from "../../Services/PostService";
import { SearchContext } from "../../Context/RouteContext";

const PostList = () => {

  const { query } = useContext(SearchContext);
  const [ post, setPost ] = useState([]);
  const [ loading, setLoading ] = useState(true);//Estado de mensaje

  useEffect(() => {
    const interval = setInterval(() => {
      GetPosts().then((data) => {
        setPost(data);
        setLoading(false);//Mensaje cambia a false y se deja de mostrar
      })
    }, 1000);

    return () => {
        clearInterval(interval);
    }
  }, []);

  return (
    <>
      {loading ? (
          <p className="d-flex justify-content-center align-items-center p-5 fs-4 fw-bold">
            Loading...
          </p>
        ) : (
          <>
            {/* Estas lineas de arriba muestran el mensaje mientras su estado sea true */}
            {post
            //  -----> Otra manera de hacer el filtro para la busqueda <-----
            // .filter((post) => post.user.toLowerCase().includes(search))
            // .filter((post) => {
            //   if (query === '') {
            //     return post;
            //   }else if (post.user.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase())) {
            //     return post;
            //   }
            //   return false;
            // })
            .filter((post) => {
              return query.toLowerCase() === ''
                ? post
                : post.author.name.toLowerCase().includes(query)
                  || post.text.toLowerCase().includes(query)
            })
            .map((post, i) => (
              <Post
                key={i}
                img={post.image}
                user={post.author.name}
                description={post.text}
                like={post.likes}
              />
            ))}
          </>
        )}
    </>
  );
}

export default PostList;
