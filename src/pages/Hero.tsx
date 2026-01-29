import{ useState, useEffect } from "react";
import Button from "../components/Button";

export function Hero(){

    const icons = [
    {id:1, icon:"/icons/icon3.png",alt:"Cup"},
    {id:2, icon:"/icons/icon4.png",alt:"Beans"},
    {id:3, icon:"/icons/icon2.png",alt:"Coffee"},
    {id:4, icon:"/icons/icon1.png",alt:"Coffee Cup"},
    ];

    const quotes = [
        "Life begins after coffee.",
        "Espresso yourself.",
        "A yawn is a silent scream for coffee.",
        "Good ideas start with great coffee."
    ];

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [fading, setFading] = useState(false);

    const shuffleQuote = () => {
        setFading(true);
        setTimeout(() => {
            setQuoteIndex((prev) => {
                const len = quotes.length;
                let next = Math.floor(Math.random() * len);
                if (next === prev) next = (next + 1) % len;
                return next;
            });
            setFading(false);
        }, 250);
    };

    useEffect(() => {
        const id = setInterval(shuffleQuote, 5000);
        return () => clearInterval(id);
    }, []);

        return(
        <div className="w-full pt-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6 lg:gap-18">
                <div className="lg:pl-16 pl-4 sm:pl-8 pt-6 sm:pt-8 lg:pt-0 space-y-6 sm:space-y-8 flex flex-col justify-center text-center items-center lg:items-start lg:text-left">
                <div className="space-y-2">
                    <p className="text-xl sm:text-2xl lg:text-3xl text-coffee font-sans italic leading-tight">Welcome to ...</p>
                   <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6">
                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-coffee font-bold font-sans leading-tight">CoffiNest</h1>
                    <img src="/icons/expresso.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"/>
                   </div>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl text-coffee font-sans italic leading-tight">Brewed To Perfection, Served With Love!</h1>
                </div>
                <div className="space-y-6 flex flex-col items-center lg:items-start">
                    <div>
                    <Button text="View Menu" height="48px" width="128px" variant="gradient"/>
                </div>

                <div className="flex space-x-6 pt-4">
                {icons.map(icon => (
                    <div key={icon.id} className="flex items-center justify-center h-10 w-10 rounded-2xl bg-white/50 shadow-2xl">
                    <img src={icon.icon} alt={icon.alt} className="w-6 h-6"/>
                    </div>
                ))}
                </div>
                </div>

            </div>

            <div className="p-8 lg:p-16 flex justify-center lg:justify-end items-center relative">
                    <img src="/photo/cup6.png" alt="cup" 
                    className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[480px] h-auto hover:scale-110 hover:rotate-12 transition-transform duration-1000 cursor-pointer"/>

                    <div className="absolute right-6 top-10 md:right-16 md:top-12 lg:right-24 lg:top-14 z-30">
                        <div className="bg-black/60 text-white px-5 py-2 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-md">
                            <p className={`text-sm sm:text-base max-w-xs truncate ${fading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                                “{quotes[quoteIndex]}”
                            </p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}