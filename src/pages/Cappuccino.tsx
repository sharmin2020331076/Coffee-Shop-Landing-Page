import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Cappuccino() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Image Entrance
        gsap.from(".about-image", {
            scrollTrigger: {
                trigger: ".about-image",
                start: "top 80%",
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Image Floating Animation
        gsap.to(".floating-container", {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Text animation
        gsap.from(".about-content", {
            scrollTrigger: {
                trigger: ".about-content",
                start: "top 80%",
            },
            x: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
        });

        // Stats animation
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: ".stats-container",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
    }, { scope: container });

    return (
        <div className="p-4 sm:p-8 lg:p-16">
            <div ref={container} className="rounded-4xl w-full bg-coffee text-[#e8d6c0] font-sans">
            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left: Image */}
                <div className="about-image relative flex justify-center lg:justify-end">
                    <div className="floating-container relative w-full max-w-2xl">
                         {/* Using a placeholder for the specific 'book and coffee' image if not available, falling back to existing assets or a new one if user provided path - assuming standardized asset usage */}
                         <img 
                            src="/icons/mug1.png" 
                            alt="Crafted with Passion" 
                            className="w-full h-auto hover:scale-120 transition-transform duration-700" 
                         />
                         {/* Dark overlay for mood if needed */}
                         
                    </div>
                </div>

                {/* Right: Content */}
                <div className="about-content space-y-6 sm:space-y-8 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-sans text-white">
                        Crafted with Passion,<br />
                        <span className="text-[#c24a1a]">Served with Love</span>
                    </h2>
                    
                    <div className="space-y-4 text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                        <p>
                            Since 2015, Essence has been a sanctuary for coffee lovers seeking exceptional quality and genuine hospitality. We source our beans from sustainable farms around the world, roasting them in-house to bring out their unique flavors.
                        </p>
                        <p>
                            Every cup we serve is a testament to our commitment to excellence. Our skilled baristas transform premium beans into artful beverages that awaken the senses and warm the soul.
                        </p>
                    </div>

                    <div className="pt-4 flex justify-center lg:justify-start">
                        <Button text="Our Story" height="48px" width="140px" variant="gradient"/>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="stats-container w-full bg-[#d0bca4] py-12 px-4 sm:px-8">
                 <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4 text-[#361402]">
                    
                    <div className="stat-item flex flex-col items-center text-center w-full sm:w-1/3">
                        <span className="text-4xl sm:text-5xl font-bold mb-1">10+</span>
                        <span className="text-lg sm:text-xl font-semibold">Years Experience</span>
                    </div>

                    <div className="stat-item flex flex-col items-center text-center w-full sm:w-1/3 border-t sm:border-t-0 sm:border-l sm:border-r border-[#361402]/20 py-6 sm:py-0">
                        <span className="text-4xl sm:text-5xl font-bold mb-1">50k+</span>
                        <span className="text-lg sm:text-xl font-semibold">Happy Customers</span>
                    </div>

                    <div className="stat-item flex flex-col items-center text-center w-full sm:w-1/3">
                        <span className="text-4xl sm:text-5xl font-bold mb-1">100%</span>
                        <span className="text-lg sm:text-xl font-semibold">Organic Beans</span>
                    </div>

                 </div>
            </div>
        </div>
        </div>
    );
}