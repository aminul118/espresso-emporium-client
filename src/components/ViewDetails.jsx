import { ScrollRestoration, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  return (
    <div className="container mx-auto mt-14">
      <div className="card bg-base-100  shadow-xl mx-auto">
        <figure>
          <img src={coffee.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {coffee.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{coffee.details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{coffee.taste}</div>
            <div className="badge badge-outline">{coffee.chef}</div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ViewDetails;
