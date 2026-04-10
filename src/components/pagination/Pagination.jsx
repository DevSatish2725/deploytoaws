import { useEffect, useState } from "react";
import Posts from "./Posts";
import PageCount from "./PageCount";
import Products from "./Products";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationType, setPaginationType] = useState(0);
  const [products, setProducts] = useState([]);
  const [showSimmerUI, setShowSimmerUI] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 10;
  useEffect(() => {
    if (Number(paginationType) === 0) {
      fetchPosts();
    }
  }, [paginationType]);

  useEffect(() => {
    if (Number(paginationType) === 1) {
      fetchProducts();
    }
  }, [paginationType, currentPage]);

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
  const fetchProducts = async () => {
    try {
      setShowSimmerUI(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${currentPage * limit - limit}`,
      );
      const data = await response.json();
      setProducts(data.products);
      //   setLimit(data.limit);
      setTotalProducts(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setShowSimmerUI(false);
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
    if (
      currentPage <
      (paginationType === 0
        ? Math.ceil(posts.length / limit)
        : Math.ceil(totalProducts / limit))
    ) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };
  const paginationTypeHandler = (e) => {
    setPaginationType(e.target.value);
    setPosts([]);
    setProducts([]);
    setCurrentPage(1);
  };
  return (
    <div className="mt-10 w-[90vw]">
      <select
        value={paginationType}
        onChange={paginationTypeHandler}
        className="border-black border-2  mb-4 cursor-pointer"
      >
        <option value={0}>Frontend Pagination</option>
        <option value={1}>Backend Pagination</option>
      </select>
      {Number(paginationType) === 0 ? (
        <Posts
          data={posts.slice(currentPage * limit - limit, currentPage * limit)}
        />
      ) : (
        <Products data={products} showSimmerUI={showSimmerUI} />
      )}
      <PageCount
        pageCount={
          Number(paginationType) === 0
            ? Math.ceil(posts.length / limit)
            : Math.ceil(totalProducts / limit)
        }
        currentPage={currentPage}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
        currentPageHandler={currentPageHandler}
      />
    </div>
  );
};

export default Pagination;
