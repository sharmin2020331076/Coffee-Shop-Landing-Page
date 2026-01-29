import Button from "../components/Button";
import { CoffeeCard } from "../components/CoffeeCard";


export function Top_items(){
    return(
        <div className="w-full min-h-screen space-y-15">
            <div className=" w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-12 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee font-sherif">TOP CATEGORIES</h2>
                <p className="text-base sm:text-lg lg:text-xl text-coffee font-sans mt-2">Eplore The Recent Most Brought Drinks This Week</p>
            </div>
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 lg:gap-0">
            <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-6 lg:gap-10 pt-16 md:pt-0 p-4 sm:p-8">
            <CoffeeCard
                title="Americano"
                description="Dark, sleek depth"
                price="$3.50"
                imageUrl="/icons/americano.png"
                 iconUrl={[
                    {
                    default: "/icons/heart.png",
                    active: "/icons/heart-filled.png",
                    },
                    {
                    default: "/icons/cart.png",
                    active: "/icons/cart-filled.png",
                    },
                ]}

            />
            <CoffeeCard
                title="Cappuccino"
                description="Creamy and rich"
                price="$3.50"
                imageUrl="/icons/cup7.png"
                iconUrl={[
                    {
                    default: "/icons/heart.png",
                    active: "/icons/heart-filled.png",
                    },
                    {
                    default: "/icons/cart.png",
                    active: "/icons/cart-filled.png",
                    },
                ]}

            />
             <CoffeeCard
                title="Iced Coffee"
                description="Pure Taste with Cold"
                price="$1.50"
                imageUrl="/icons/cup.png"
                iconUrl={[
                    {
                    default: "/icons/heart.png",
                    active: "/icons/heart-filled.png",
                    },
                    {
                    default: "/icons/cart.png",
                    active: "/icons/cart-filled.png",
                    },
                ]}

            />

        </div>

        <div className="p-4 sm:p-8 lg:p-8 space-y-4 sm:space-y-6 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee font-sans">Discover a world of flavor in every cup</h1>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-coffee font-sans leading-relaxed">Savor the aroma that awakens your senses, crafted with care and passion for an unforgettable experience.</p>
            <Button text="Learn More" height="48px" width="128px" variant="gradient"/>
        </div>
        </div>
        </div>
)
}