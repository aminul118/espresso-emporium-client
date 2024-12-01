import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({ coffee }) => {
  const [newCoffee, setNewCoffee] = useState(coffee);

  // console.log(coffee);
  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const remainingCoffee = coffee.filter((update) => update._id !== id);
    setNewCoffee(remainingCoffee);
  };

  return (
    <div className="flex bg-base-200 rounded-lg items-center justify-between p-6">
      <div>
        <img className="w-36" src={newCoffee.photo} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{newCoffee.name}</h2>
        <p>{newCoffee.chef}</p>
        <p>{newCoffee.details}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-xl mr-6">
        <Link to={`/viewDetails/${newCoffee._id}`}>
          <FaEye />
        </Link>

        <button>
          <FaEdit />
        </button>
        <button
          onClick={() => {
            handleDelete(newCoffee._id);
          }}
          className="text-red-500 rounded-full text-xl"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Product;
