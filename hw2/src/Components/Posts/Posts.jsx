import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const request = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return setPosts(data);
  };

  const deleted = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  useEffect(() => {
    request();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((i) => (
          <li key={i.id}>
            <p>
              {i.id}: {i.title}
            </p>
            <Link to={`/about/${i.id}`}>more</Link>
            <button onClick={() => deleted(i.id)}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
