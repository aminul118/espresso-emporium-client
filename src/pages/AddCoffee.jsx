import { ScrollRestoration } from "react-router-dom";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const chef = form.get("chef");
    const supplier = form.get("supplier");
    const taste = form.get("taste");
    const photo = form.get("photo");
    const details = form.get("details");
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      photo,
      details,
    };
    console.log(newCoffee);

    fetch("https://espresso-emporium-server-khaki.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-[#F4F3F0] py-14">
      <ScrollRestoration />
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-rancho text-3xl">Add New Coffee</h2>
        <p>
          It is a long-established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <div>
        <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-12 container mx-auto"
        >
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Chef */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered"
              required
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee Supplier"
              className="input input-bordered"
              required
            />
          </div>

          {/* Taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee Taste"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter coffee Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee Details"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6 col-span-1 sm:col-span-2">
            <button className="btn btn-warning w-full">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
