import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Post from "./components/Post";

const Posts = () => {
  const loadMoreRef = useRef(null);
  const queryClient = useQueryClient();
  const [postList, setPostList] = useState([]);
  //   const fetchPosts = async () => {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts",
  //     );
  //     return response.data;
  //   };
  const LIMIT = 20;
  const fetchPostsForInfiniteScroll = async ({ pageParam = 0 }) => {
    console.log("page param", pageParam);
    const response = await axios.get(
      `https://dummyjson.com/posts?skip=${pageParam}&limit=${LIMIT}`,
    );
    return {
      data: response.data.posts,
      nextSkip: pageParam + LIMIT,
      hasMore: pageParam + LIMIT < response.data.total,
    };
  };
  const createPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/pos", {
      method: "POST",
      body: JSON.stringify({
        title: "Test post",
        body: "Test post 1 descripttion",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error("Api Failed.");
    }
    return response.data;
  };
  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: fetchPosts,
  //     staleTime: 5000,
  //     refetchOnWindowFocus: false,
  //     refetchInterval: 5000,
  //   });
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: fetchPostsForInfiniteScroll,

      getNextPageParam: (lastPage) => {
        return lastPage.hasMore ? lastPage.nextSkip : undefined;
      },
      onSuccess: (data) => {
        console.log("infinite scroll data", data);
      },
      refetchOnWindowFocus: false
    });
  const addPost = useMutation({
    mutationFn: () => createPost(),
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (data?.pages) {
      setPostList([...postList, ...data.pages[0].data]);
    }
  }, [data?.pages[0].data]);

  if (isLoading) return <h1>Loading...</h1>;
  //   if (isError) return <h1>Error occurred.</h1>;
  return (
    <div>
      <button onClick={() => addPost.mutate()}>Add Post</button>
      <ul className="list-none flex flex-wrap gap-2 justify-center">
        {[...data.pages[0].data, ...data.pages[0].data].map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
      <div ref={loadMoreRef}></div>
      {isFetchingNextPage ? <h1>Loading More...</h1> : null}
    </div>
  );
};

export default Posts;
