import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const data = axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  }, [id]);
  return (
    <div>
      <h2>{post?.id}</h2>
      <h2>{post?.title}</h2>
    </div>
  );
};

export default Post;
