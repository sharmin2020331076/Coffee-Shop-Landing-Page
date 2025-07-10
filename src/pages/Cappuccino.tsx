import Button from "../components/Button";

export function Cappuccino(){
    return(
        <div className="w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="pt-55 lg:pl-16 pl-8 space-y-6">
                    <h1 className="text-3xl font-bold text-coffee font-sans mb-10">Bold Flavors. Warm Moments</h1>
                     <p className="text-xl font-semibold text-coffee font-sans">Savor the aroma that awakens your senses, crafted with care and passion for an unforgettable experience.</p>
                    <Button text="Learn More" height="48px" width="128px" variant="gradient"/>
                </div>

                <div className="relative inline-block">
                    <img src="/icons/mug2.png" alt="Cappuccino" className="rounded-lg"/>
                    <div className="bg-white/90 rounded-4xl shadow-4xl absolute top-50 right-50 px-3 py-2 lg:px-6 lg:py-6 hover:scale-110 transition"><p className="text-2xl text-coffee font-bold font-sans">$2.50</p></div>
                </div>
        </div>
    )
}