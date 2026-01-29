import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useGSAP(() => {
        gsap.set(menuRef.current, { x: "100%" });

        tl.current = gsap.timeline({ paused: true })
            .to(menuRef.current, { x: "0%", duration: 0.5, ease: "power3.inOut" })
            .from(".menu-item", { x: 50, opacity: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" }, "-=0.3");

    }, { scope: container });

    useEffect(() => {
        if (isMenuOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isMenuOpen]);

    return (
        <nav ref={container} className="fixed w-full h-20 backdrop-blur-3xl px-4 sm:px-8 lg:px-16 py-4 z-50 flex justify-between items-center transition-all duration-300">
            {/* Logo Section */}
            <div className="flex flex-col space-y-0 z-50">
                <div className="flex space-x-1 items-center cursor-pointer">
                    <h1 className="font-bold text-lg sm:text-2xl text-coffee">Flavored</h1>
                    <img src="/icons/expresso.png" alt="Logo" className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <p className="font-bold font-sans text-coffee text-xs sm:text-sm">Wake up to something special.</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-10 items-center">
                <ul className="flex space-x-10 text-coffee font-bold text-md cursor-pointer">
                    {["Home", "Coffee Menu", "About Us", "Contact US"].map((item, index) => (
                        <li
                            key={index}
                            className="hover:scale-105 transition-transform hover:text-[#e68600]"
                        >
                            <a href={`#${item.toLowerCase().replace(" ", "").replace("us", "")}`}>{item}</a>
                        </li>
                    ))}
                </ul>
                <Button text="Coffee Shop" height="48px" width="120px" background="var(--color-coffee)" variant="solid" />
            </div>

            {/* Mobile Menu Button - Modern Hamburger */}
            <div className="lg:hidden z-50">
                <button onClick={toggleMenu} className="focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center group gap-1.5">
                    <span className="block h-0.5 w-6 bg-coffee transition-all duration-300"></span>
                    <span className="block h-0.5 w-6 bg-coffee transition-all duration-300"></span>
                    <span className="block h-0.5 w-6 bg-coffee transition-all duration-300"></span>
                </button>
            </div>

            {/* Mobile Menu Overlay - Modern Glassmorphism Side Sheet */}
            {/* Backdrop */}
            {isMenuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                ></div>
            )}

            {/* Drawer */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-[75%] max-w-[300px] h-screen bg-yellow-50/90 backdrop-blur-3xl shadow-2xl z-50 flex flex-col border-l border-white/20 lg:hidden"
            >
                {/* Close Button inside Drawer */}
                <div className="absolute top-6 right-6 z-50">
                    <button onClick={toggleMenu} className="p-2 bg-coffee/10 rounded-full hover:bg-coffee/20 transition-colors">
                        <svg className="w-6 h-6 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col space-y-8 p-8 items-start mt-12">
                    <ul className="flex flex-col space-y-6 text-coffee font-bold text-2xl font-sans text-left w-full">
                        {["Home", "Menu", "About", "Contact"].map((item, idx) => (
                            <li
                                key={idx}
                                onClick={toggleMenu}
                                className="menu-item border-b border-coffee/10 pb-2 w-full cursor-pointer"
                            >
                                <a href={`#${item.toLowerCase()}`}>{item === "Menu" ? "Coffee Menu" : item === "Contact" ? "Contact US" : item === "About" ? "About Us" : item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="menu-item pt-4 w-full">
                        <Button text="Coffee Shop" height="56px" width="100%" background="var(--color-coffee)" variant="solid" />
                    </div>
                </div>
            </div>
        </nav>
    )
}