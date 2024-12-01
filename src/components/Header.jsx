import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-header-image bg-cover sticky top-0 z-50">
      <Link to={"/"}>
        <div className="flex items-center justify-center py-3 gap-2">
          <img className="w-16" src="/src/assets/icons/logo.png" alt="" />
          <h1 className="text-white font-rancho text-4xl">Espresso Emporium</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
