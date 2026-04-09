import Post from "./Post";

const Posts = ({ data }) => {
  console.log(data);
  return (
    <div>
      {!data.length ? (
        <div className="flex flex-col gap-2">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <h2 className="h-2 bg-gray-200 rounded-2xl w-16"></h2>
                <p className="h-2 bg-gray-200 rounded-2xl"></p>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
