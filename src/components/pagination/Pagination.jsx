import { useEffect, useState } from "react";
import Posts from "./Posts";
import PageCount from "./PageCount";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; 
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const currentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const prevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };
  const nextPageHandler = () => {
    if (currentPage < Math.ceil(posts.length / limit)) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };
  return (
    <div className="mt-10">
      <Posts
        data={posts.slice(currentPage * limit - limit, currentPage * limit)}
      />
      <PageCount
        pageCount={Math.ceil(posts.length / limit)}
        currentPage={currentPage}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
        currentPageHandler={currentPageHandler}
      />
    </div>
  );
};

export default Pagination;
