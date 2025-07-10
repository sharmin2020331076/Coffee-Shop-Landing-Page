import Button from "../components/Button";

export function Footer(){
    return <>
        <div>
            <div className="flex justify-between p-8 lg:p-16">
                <div className="">
                    <p className="text-xs text-white font-bold">LEST'S TALK</p>
                <   h1 className="text-2xl text-coffee font-bold">Want to Reserve a Table?</h1>
                </div>
                 <div>
                    <Button text="Contact Now" height="48px" width="164px" variant="solid"/>
                </div>

               
            </div>
             <div className=" pl-8 pr-8 lg:pr-16 lg:pl-16">
                  <hr className="border-1 border-amber-800 w-full" />
                </div>
            

            <div className="grid grid-cols-[70%_30%]">
                    <div className="p-8 lg:p-16">
                        <p className="text-sm font-semibold text-coffee">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corporis dolor illum delectus, eos quo odio saepe, magnam est earum quae accusamus dolorem debitis quas libero natus ea facilis excepturi, enim in? Fuga voluptatum provident iste eligendi perferendis! Omnis eveniet repellendus aliquid asperiores impedit minima delectus cupiditate suscipit sed adipisci laborum ea accusamus neque iusto consequatur rem vero nulla laudantium distinctio voluptates aliquam eius, obcaecati dolor incidunt! Dolorum doloribus aperiam asperiores porro accusamus cum dignissimos. Voluptates at placeat fugiat, iste illum nisi, voluptatibus libero ipsum natus architecto, inventore iusto culpa fuga rem nemo quisquam cupiditate blanditiis? Quisquam delectus consectetur est.</p>
                    </div>
            </div>
            
        </div>

        <div className="flex flex-wrap justify-between p-8 lg:p-16">
            <div className="pl-4">
            <div className="flex space-x-2">
                <h1 className="font-bold text-2xl text-white">Flavored</h1>
                <img src="/icons/favicon.png" alt="Logo" className="w-7 h-7 filter invert brightness-0"/>
            </div>
            <p className="text-white font-semibold text-sm">Wake up to something special</p>
            </div>
            <div>
                <p className="text-2xl text-coffee font-bold">Our Services</p>
                <p className="">Pricing</p>
                <p className="">Tracking</p>
                <p className="">Report a Bag</p>
                <p className="">Terms of Services</p>
            </div>
            <div>
                <p className="text-2xl text-coffee font-bold">Our Comapny</p>
                <p className="">Pricing</p>
                <p className="">Tracking</p>
                <p className="">Report a Bag</p>
                <p className="">Terms of Services</p>
            </div>
            <div>
                <p className="text-2xl text-coffee font-bold">Address</p>
                <p className="">Pricing</p>
                <p className="">Tracking</p>
                <p className="">Report a Bag</p>
                <p className="">Terms of Services</p>
            </div>
        </div>
</>
        
    
}