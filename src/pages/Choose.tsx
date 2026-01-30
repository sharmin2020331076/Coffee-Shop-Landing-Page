
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Choose(){
    const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
    
    return <>
        {/* Why Are We Different Section */}
        <div className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16">
            {/* Heading */}
            <div ref={headingRef} className={`${headingVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-coffee mb-4">Why are we different?</h2>
                
                {/* Subtitle */}
                <p className="text-center text-lg sm:text-xl text-[#7e2807] font-bold mb-12 sm:mb-16">We don't just make your coffee, we make your day!</p>
            </div>
            
            {/* Feature Cards */}
            <div ref={cardsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16`}>

                {/* Supreme Beans Card */}
                <div className={`bg-[#EADDD0]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <img src="/photo/beans.png" alt="Supreme Beans" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">Supreme Beans</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Beans that provides great taste</p>
                </div>
                
                {/* High Quality Card */}
                <div className={`bg-[#EADDD0]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <svg className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">High Quality</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">We provide the highest quality</p>
                </div>
                
                {/* Extraordinary Card */}
                <div className={`bg-[#EADDD0]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <img src="/photo/coffee-cup.png" alt="Extraordinary" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">Extraordinary</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Coffee like you have never tasted</p>
                </div>
                
                {/* Affordable Price Card */}
                <div className={`bg-[#EADDD0]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <img src="/photo/affordable.png" alt="Affordable Price" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">Affordable Price</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Our Coffee prices are easy to afford</p>
                </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-20 w-full bg-[#EADDD0]/30 rounded-3xl relative overflow-hidden px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
                
                {/* Decorative Beans - Left */}
                <div className="absolute -left-12 -top-12 opacity-80 pointer-events-none">
                     <img src="/photo/beans.png" alt="Beans" className="w-48 sm:w-64 lg:w-80 object-contain transform -rotate-45"/>
                </div>

                {/* Decorative Beans - Right */}
                <div className="absolute -right-12 -bottom-12 opacity-80 pointer-events-none">
                     <img src="/photo/beans.png" alt="Beans" className="w-48 sm:w-64 lg:w-80 object-contain transform rotate-180"/>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#361402]">Join in and get 15% Off!</h2>
                        <p className="text-sm sm:text-base text-gray-500 font-medium tracking-wide">Subscribe to our newsletter and get 15% off discount code.</p>
                    </div>

                    <div className="flex w-full max-w-md items-center bg-white rounded-full p-1.5 shadow-sm border border-[#361402]/10 focus-within:border-[#361402]/30 transition-colors">
                        <div className="pl-4 pr-2 text-gray-400">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="flex-1 bg-transparent border-none outline-none text-[#361402] placeholder-gray-400 text-sm sm:text-base py-2"
                        />
                        <button className="bg-[#2C1810] text-[#E8D6C0] px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#3d2116] transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>

</>
        
    
}