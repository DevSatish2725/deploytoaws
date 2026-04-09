const Product = ({ id, title, description }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-4">
      <h2 className="font-bold">
        {id} {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default Product;
