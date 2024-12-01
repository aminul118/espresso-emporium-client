import { Link } from "react-router-dom";
import Product from "./Product";

const Products = ({ coffees }) => {
  // console.log(coffees);
  return (
    <div className="bg-our-products bg-cover py-12">
      <div className="flex justify-center items-center flex-col py-8">
        <p>--- Sip & Savor ---</p>
        <h2 className="font-rancho text-3xl">Our Popular Products</h2>
        <Link to={`/addCoffee`} className="btn-warning btn">
          Add Coffee
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4 container mx-auto">
        {coffees.map((coffee) => (
          <Product key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Products;
