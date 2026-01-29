import Button from "../components/Button"
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Choose(){
    const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
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
                <div className={`bg-yellow-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <img src="/photo/beans.png" alt="Supreme Beans" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">Supreme Beans</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Beans that provides great taste</p>
                </div>
                
                {/* High Quality Card */}
                <div className={`bg-yellow-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <svg className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">High Quality</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">We provide the highest quality</p>
                </div>
                
                {/* Extraordinary Card */}
                <div className={`bg-yellow-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <img src="/photo/coffee-cup.png" alt="Extraordinary" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">Extraordinary</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Coffee like you have never tasted</p>
                </div>
                
                {/* Affordable Price Card */}
                <div className={`bg-yellow-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${cardsVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
                    <div className="mb-3 sm:mb-4 flex justify-center">
                        <img src="/photo/affordable.png" alt="Affordable Price" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-coffee mb-2">Affordable Price</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Our Coffee prices are easy to afford</p>
                </div>
            </div>
            
            {/* CTA Section */}
            <div ref={ctaRef} className={`flex flex-col items-center justify-center gap-4 sm:gap-6 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <p className="text-[#7e2807] font-bold text-lg sm:text-xl">Great ideas start with great coffee. Lets help you achieve that</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-coffee">Get started today.</h3>
                <Button text="Join Us" height="48px" width="128px" variant="gradient"/>
            </div>  
        </div>

</>
        
    
}