import { useEffect, useState } from "react";
import Post from "./Post";
import getPost from "../../Services/PostService";

const PostList = ({query}) => {
  const [ post, setPost ] = useState([]);
  const [loading, setLoading] = useState(true);//Estado de mensaje

  useEffect(() => {
    const interval = setInterval(() => {
      getPost().then((data) => {
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
                : post.user.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
            })
            .map((post, i) => (
              <Post
                key={i}
                img={post.img}
                user={post.user}
                description={post.description}
              />
            ))}
          </>
        )}
    </>
  );
}

export default PostList;
