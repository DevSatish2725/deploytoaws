import React, { useEffect, useState } from "react";
import useFetch from "../custom-hooks/use-fetch";

const Fetch = () => {
  // const { loadingMap, fetchData } = useFetch();
  const { loadingMap, fetchData } = useFetch();
  console.log("Loading Map:", loadingMap);

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const getList = async () => {
    const response = await fetchData(
      "https://jsonplaceholder.typicode.com/posts",
      "posts"
    );
    setPosts(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  // const { success, data } = apiResponse;

  const handleFetchSinglePost = async () => {
    const response = await fetchData(
      "https://jsonplaceholder.typicode.com/posts/1",
      "post"
    );
    setPost(response.data);
    console.log("Single Post:", response);
  };

  const renderList = () => {
    if (loadingMap.posts) {
      return <span>Loading...</span>;
    }
    if (posts.length) {
      return posts.map((post) => (
        <p key={post.id}>
          <strong>{post.id}</strong> <span>{post.title}</span>
        </p>
      ));
    }
  };
  const renderPost = () => {
    if (loadingMap.post) {
      return <span>Loading...</span>;
    }
    if (post.id) {
      return (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    }
  };
  return (
    <>
      <button onClick={handleFetchSinglePost}>Get Single Post</button>
      {renderPost()}
      <h2>Posts List</h2>
      {renderList()}
    </>
  );
};

export default Fetch;
