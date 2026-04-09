import Product from "./Product";

const Products = ({ data, showSimmerUI }) => {
  return (
    <div>
      {showSimmerUI ? (
        <div className="flex flex-col gap-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <h2 className="h-2 bg-gray-200 rounded-2xl w-46 mb-2"></h2>
                <p className="h-2 bg-gray-200 rounded-2xl"></p>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {data.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
