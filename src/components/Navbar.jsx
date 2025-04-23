import { useState } from "react";
import { Menu, X } from "lucide-react";
import vercelLogo from "/src/assets/logos/vercel.svg";

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => setIsMenuOpen((prev) => !prev);

return (
<header className="pt-[7px] fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg">
    <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sm:px-12">
    <div className="flex items-center -ml-20">
          <a href="/">
            <img src={vercelLogo} alt="Vercel Logo" className="w-24 h-auto" /> {/* Adjust size as needed */}
          </a>
    </div>
    <div className="hidden md:flex space-x-6 -mr-20">
        <a href="#features" className="hover:text-gray-400">Features</a>
        <a href="#pricing" className="hover:text-gray-400">Pricing</a>
        <a href="#docs" className="hover:text-gray-400">Docs</a>
        <a href="#company" className="hover:text-gray-400">Company</a>
    </div>

    {/* Mobile menu toggle */}
    <div className="md:hidden">
        <button onClick={toggleMenu}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
    </div>
    </div>

    {/* Mobile menu */}
    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-black p-6`}>
    <a href="#features" className="block py-2 text-white">Features</a>
    <a href="#pricing" className="block py-2 text-white">Pricing</a>
    <a href="#docs" className="block py-2 text-white">Docs</a>
    <a href="#company" className="block py-2 text-white">Company</a>
    <a href="#cta" className="block py-2 mt-6 text-center bg-blue-500 text-white py-2 rounded">Get Started</a>
    </div>
</header>
);
}