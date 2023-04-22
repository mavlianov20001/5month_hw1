import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalDel from "../Modal/ModalDel";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState(false);

  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return setPosts(data);
  };

  const deleted = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
        setActive(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((i) => (
          <li onDoubleClick={() => deleted(i.id)} key={i.id}>
            {active && (
              <ModalDel
                id={i.id}
                setActive={setActive}
                active={active}
                deleted={deleted}
              />
            )}
            <p>
              {i.id}: {i.title}
            </p>
            <Link to={`/about/${i.id}`}>more</Link>
            <button onClick={() => setActive(true)}>modalDelete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
