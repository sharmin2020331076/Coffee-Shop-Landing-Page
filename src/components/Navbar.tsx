import Button from "./Button";



export function Navbar() {
    return(
        <div className="hidden fixed w-full md:flex h-20 backdrop-blur-2xl pr-4 sm:pr-8 pl-4 sm:pl-8 lg:pr-16 lg:pl-16 pt-4 pb-4 z-50 justify-between items-center">
            <div className="flex flex-col space-y-0">
                <div className="flex space-x-1 items-center">
                    <h1 className="font-bold text-lg sm:text-2xl text-coffee">Flavored</h1>
                    <img src="/icons/expresso.png" alt="Logo" className="w-6 h-6 sm:w-7 sm:h-7"/>
                </div>
                <p className="font-bold font-sans text-coffee text-xs sm:text-sm">Wake up to something special.</p>
            </div>

            <div className="flex space-x-6 lg:space-x-10 items-center">
                <ul className="hidden lg:flex space-x-8 lg:space-x-10 text-coffee font-bold text-sm cursor-pointer">
                    <li>Home</li>
                    <li>Coffee Menu</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                </ul>

                <Button text="Coffee Shop" height="48px" width="120px" background="var(--color-coffee)" variant="solid"/>
            </div>





        </div>
    )
}