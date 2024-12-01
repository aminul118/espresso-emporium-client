import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../pages/ContactUs";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-597px)]">
        <Outlet />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainLayout;
