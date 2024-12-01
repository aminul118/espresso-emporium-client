import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col py-8">
        <p>--- Sip & Savor ---</p>
        <h2 className="font-rancho text-3xl">Our Popular Products</h2>
        <Link to={`/addCoffee`} className="btn-warning btn">
          Add Coffee
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default Products;
