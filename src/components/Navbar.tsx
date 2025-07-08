import Button from "./Button";



export function Navbar() {
    return(
        <div className="fixed w-full flex h-20 backdrop-blur-2xl pr-16 pl-16 pt-4 pb-4 z-50 justify-between items-center">
            <div className="flex flex-col space-y-0">
                <div className="flex space-x-1 items-center">
                    <h1 className="font-bold text-2xl text-coffee">Flavored</h1>
                    <img src="/icons/expresso.png" alt="Logo" className="w-7 h-7"/>
                </div>
                <p className="font-semibold font-sans text-sm">Wake up to something special.</p>
            </div>

            <div className="flex space-x-10 items-center">
                <ul className="flex space-x-10 text-coffee font-bold ">
                    <li>Home</li>
                    <li>Coffee Menu</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                </ul>

                <Button text="Coffee Shop" height="48px" width="128px" background="var(--color-coffee)"/>
            </div>





        </div>
    )
}