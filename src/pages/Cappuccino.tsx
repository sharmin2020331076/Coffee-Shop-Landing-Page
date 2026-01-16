import Button from "../components/Button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Cappuccino(){
    const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

    return(
        <div className="w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-8 items-center">
                <div className="p-14">
                    <div ref={textRef} className={`bg-yellow-100 rounded-3xl p-8 sm:pt-12 lg:pt-0 lg:pl-16 pl-4 sm:pl-8 space-y-4 sm:space-y-6 order-2 lg:order-1 flex flex-col justify-center hover:shadow-2xl hover:scale-105 transition-all ease-out cursor-pointer ${textVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee font-sans leading-tight">Our Story</h1>
                     <p className="text-base text-coffee font-sans leading-relaxed">Coffee Break is your gateway to a world of rich, aromatic experiences crafted for true coffee lovers. As an online store, it curates an exceptional range of specialty coffees sourced ethically from diverse regions across the globe. Whether you're drawn to the bold depth of medium-dark roast single origin beans or the playful notes of flavored espresso, Coffee Break promises something to delight every palate. Beyond beans, the store features top-tier brewing equipment—from precision grinders to sleek espresso makers—ensuring your home setup matches your taste. And with highly trained baristas behind the scenes, every recommendation feels like expert guidance in your coffee journey.</p>
                    <Button text="More" height="48px" width="128px" variant="gradient"/>
                </div>
                </div>

                <div ref={imageRef} className={`relative w-full flex justify-center items-center order-1 lg:order-2 p-4 sm:p-8 lg:p-0 ${imageVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <img src="/icons/mug1.png" alt="Cappuccino" className="rounded-lg w-full max-w-sm lg:max-w-none h-auto hover:scale-110 hover:-translate-y-2 transition-transform ease-out cursor-pointer"/>
                    <div className="absolute top-1/3 right-12 sm:right-16 lg:right-24">
                        <div className="bg-white/90 rounded-3xl shadow-md px-3 py-2 sm:px-4 sm:py-3 hover:scale-110 transition"><p className="text-sm sm:text-base lg:text-lg text-coffee font-bold font-sans">$2.50</p></div>
                    </div>
                </div>
        </div>
    )
}