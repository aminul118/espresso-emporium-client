import { useLoaderData } from "react-router-dom";
import BannerCards from "../components/BannerCards";
import HeroBanner from "../components/HeroBanner";
import Products from "../components/Products";
import FollowUsOnInstagram from "../components/FollowUsOnInstragram";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <HeroBanner />
      <BannerCards />
      <Products coffees={coffees} />
      <FollowUsOnInstagram />
    </div>
  );
};

export default Home;
