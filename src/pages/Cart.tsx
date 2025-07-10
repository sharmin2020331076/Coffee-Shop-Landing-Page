import Button from "../components/Button";
import { CoffeeCard } from "../components/CoffeeCard";
//bsolue top- left-1/2 transform -translate-y-1/2
//absolute bottom-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2

export function Cart(){
    return(
        <div className="w-full min-h-screen pt-20">
            <div className="grid grid-cols-[60%_40%]">
            <div className="flex lg:flex-row flex-col md:space-x-12 space-x-0 space-y-32 lg:space-y-0 p-8">
        

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

        </div>

        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-coffee font-sans mb-10">Discover a world of flavor in every cup</h1>
            <p className="text-xl font-semibold text-coffee font-sans">Savor the aroma that awakens your senses, crafted with care and passion for an unforgettable experience.</p>
            <Button text="Learn More" height="48px" width="128px" variant="gradient"/>
        </div>
        </div>
        </div>
)
}