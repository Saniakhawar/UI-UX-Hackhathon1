import Link from "next/link";
import { BsSearch, BsCart } from "react-icons/bs"; // Search and Cart icons
import { FiHeart } from "react-icons/fi"; // Heart icon
import { FaUser } from "react-icons/fa"; // User icon for Login/Register

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Bandage</div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="#">Home</Link>
          <Link href="#">Shop</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          {/* Login/Register Icon with Text */}
          <Link href="#" className="flex items-center gap-2 hover:text-blue-500 transition">
            <FaUser className="text-lg" />
            <span>Login/Register</span>
          </Link>
          {/* Heart Icon with "1" (No Space) */}
          <span className="flex items-center text-lg cursor-pointer hover:text-blue-500 transition">
            <FiHeart />
            1
          </span>

          {/* Search Icon */}
          <BsSearch className="text-lg cursor-pointer hover:text-blue-500 transition" />

          {/* Cart Icon with "1" (No Space) */}
          <span className="flex items-center text-lg cursor-pointer hover:text-blue-500 transition">
            <BsCart />
            1
          </span>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
