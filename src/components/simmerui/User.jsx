const User = ({ name, username, email }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-2 w-80">
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
