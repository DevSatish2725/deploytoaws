const User = ({ id, title, description }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-2 w-80">
      <h1 className="font-bold">
        <strong>{id}:-</strong>Title: {title}
      </h1>
      <p>Description: {description}</p>
    </div>
  );
};

export default User;
