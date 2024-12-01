import { useLoaderData } from "react-router-dom";
import BannerCards from "../components/BannerCards";
import HeroBanner from "../components/HeroBanner";
import Products from "../components/Products";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <HeroBanner />
      <BannerCards />
      <Products coffees={coffees} />
    </div>
  );
};

export default Home;
