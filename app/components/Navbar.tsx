'use client';

import Link from 'next/link';
import { BiMenu, BiX } from 'react-icons/bi';

import useNavbarState from '../../hooks/useNavbarVisibility';

export default function Navbar() {
    const { isVisible, isMobileMenu, setIsMobileMenu, pathname, navLinks } = useNavbarState();

    return (
        <nav className={`fixed w-full rounded-b-3xl bg-[#fff7ef] shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 z-70 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-7xl mx-auto px-5 py-4 sm:py-4 sm:px-6 lg:px-8">


                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="force-bebas sm:text-6xl text-[#5C5032] ml-5 font-extrabold">
                                Roots
                            </span>
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`force-inter text-[#5C5032] hover:text-[#423923] mr-10 px-3 py-2 rounded-md text-base font-bold transition-colors ${pathname === link.href ? "text-blue-600" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                     {/* mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenu(!isMobileMenu)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#3a3a3a] hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            {isMobileMenu ? (
                                <BiX className="text-3xl"/>
                            ) : (
                                <BiMenu className="text-3xl"/>
                            )}
                        </button>
                    </div>

                    <div className={`md:hidden absolute right-0 top-16 w-full bg-white shadow-lg  transition-all duration-300 ease-in-out ${isMobileMenu ? "max-h-64 opacity-100 rounded-b-2xl shadow-lg" : "max-h-0 opacity-0 overflow-hidden"}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenu(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href ? "text-blue-600 " : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
