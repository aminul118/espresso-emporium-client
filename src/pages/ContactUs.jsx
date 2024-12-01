import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="bg-contact-image bg-cover py-14">
      <div className=" grid grid-cols-2 container mx-auto gap-4 2xl:gap-32 justify-center ic">
        {/* Left side */}
        <div>
          <img className="w-14" src="/src/assets/icons/logo.png" alt="" />
          <h2 className="text-3xl font-rancho">Espresso Emporium</h2>
          <p className="max-w-xl">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          {/* Icons */}
          <div className="flex items-center gap-3 text-xl mt-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h2 className="text-3xl font-rancho mt-6">Get in Touch</h2>
          <p className="flex items-center gap-2">
            <FaPhone /> +880 1533 3333
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> info@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapLocation /> Belly Road Dhaka
          </p>
        </div>
        {/* Right Side */}
        <div>
          <h2 className="text-3xl font-rancho">Contact with us</h2>
          <form>
            <div className="flex flex-col  gap-2 ">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                className="p-3 rounded-md"
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="p-3 rounded-md"
              />
              <input
                type="text"
                name="text"
                id=""
                placeholder="Message"
                className="p-3 rounded-md h-32"
              />
              <input className="btn-warning btn" type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
