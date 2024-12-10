import { useState } from "react";
import logo from "../../assets/logo.svg";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center text-black py-6 px-4 md:px-5 drop-shadow-md">
                <a href="#" className="flex gap-2 items-center">
                    <img src={logo} alt="Logo" className="max-w-[16px] max-h-[16px]" />
                    <p className="lg:text-2xl font-bold md:text-xl sm:text-lg">Vovik</p>
                </a>

                {/* Desktop Navigation Menu */}
                <ul className="hidden sm:flex gap-4 self-center">
                    <li><a href="/" className="p-2 py-1 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Главная</a></li>
                    <li><a href="/about" className="p-2 py-1 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">О нас</a></li>
                    <li><a href="/catalog" className="p-2 py-1 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Каталог</a></li>
                    <li><a href="/contacts" className="p-2 py-1 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Контакты</a></li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <button
                    className="sm:hidden p-2 text-black hover:text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </header>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <nav className="sm:hidden bg-gray-100 border-t border-gray-300">
                    <ul className="flex flex-col gap-2 p-4">
                        <li><a href="/" className="p-2 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Главная</a></li>
                        <li><a href="/about" className="p-2 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">О нас</a></li>
                        <li><a href="/catalog" className="p-2 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Каталог</a></li>
                        <li><a href="/contacts" className="p-2 text-sm font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Контакты</a></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default NavBar;
