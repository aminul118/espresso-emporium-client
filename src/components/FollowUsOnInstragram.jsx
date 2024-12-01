import img1 from "../assets/cups/Rectangle 9.png";
import img2 from "../assets/cups/Rectangle 10.png";
import img3 from "../assets/cups/Rectangle 11.png";
import img4 from "../assets/cups/Rectangle 12.png";
import img5 from "../assets/cups/Rectangle 14.png";
import img6 from "../assets/cups/Rectangle 14.png";
import img7 from "../assets/cups/Rectangle 15.png";
import img8 from "../assets/cups/Rectangle 16.png";

const FollowUsOnInstagram = () => {
  return (
    <div className="py-10 container mx-auto">
      <div className="text-center pb-14">
        <p>Follow Us Now</p>
        <h2 className="font-rancho text-4xl">Follow on Instagram</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full px-4">
        <img className="w-full" src={img1} alt="" />
        <img className="w-full" src={img2} alt="" />
        <img className="w-full" src={img3} alt="" />
        <img className="w-full" src={img4} alt="" />
        <img className="w-full" src={img5} alt="" />
        <img className="w-full" src={img6} alt="" />
        <img className="w-full" src={img7} alt="" />
        <img className="w-full" src={img8} alt="" />
      </div>
    </div>
  );
};

export default FollowUsOnInstagram;
