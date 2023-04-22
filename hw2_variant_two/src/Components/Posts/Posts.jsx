import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
// import ModalDel from "../Modal/ModalDel";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const [active, setActive] = useState(false);

  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return setPosts(data);
  };

  const deleted = (id) => {
    const confirm = window.confirm(`Ты точно хочешь удалить этот id ${id}`);
    if (confirm) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
          setPosts(posts.filter((post) => post.id !== id));
          setActive(false);
        });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((i) => (
          <li onDoubleClick={() => deleted(i.id)} key={i.id}>
            <p>
              {i.id}: {i.title}
            </p>
            <Link
              style={{ textDecorationStyle: "dotted" }}
              to={`/about/${i.id}`}
            >
              <Button variant="outlined">More</Button>
            </Link>
            <Button variant="contained" onClick={() => deleted(i.id)}>
              Delete {i.id}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
