import Button from "../components/Button";
import { CoffeeCard2 } from "../components/CoffeeCard";

export function Mobile(){

    const icons = [
    {id:1, icon:"/icons/icon3.png",alt:"Cup"},
    {id:2, icon:"/icons/icon4.png",alt:"Beans"},
    {id:3, icon:"/icons/icon2.png",alt:"Coffee"},
    {id:4, icon:"/icons/icon1.png",alt:"Coffee Cup"},
  ];

    return<>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_30%_40%] items-center gap-6 p-8 lg:p-16">
        <div className="w-full rounded-3xl bg-white/50 space-y-2">
            <h1 className="text-coffee text-xl font-bold pl-4 pt-2">&lt;</h1>
            <h1 className="text-coffee text-xl font-bold pl-4">Coffee</h1>
            <div className="pt-2 pl-3">
            <Button text="View Menu" height="32px" width="96px" />
            </div>
            <div className="flex justify-between pl-4 pr-4 pt-2 lg:pl-8 lg:pr-8 mb-10 lg:mb-16">
                {icons.map(icon => (
                    <div key={icon.id} className="flex items-center justify-center h-7 w-7 lg:h-10 lg:w-10 rounded-xl bg-white/50 shadow-xl">
                    <img src={icon.icon} alt={icon.alt} className="w-4 h-4 lg:w-6 lg:h-6  " />
                    </div>
                ))}
                </div>
                <div className="flex space-x-2 items-center justify-center p-2">
                        
                
                            <CoffeeCard2
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
                            <CoffeeCard2
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
                        <div className="p-2 mt-6 grid grid-cols-[70%_30%]">

                            <div className="bg-white/50 rounded-2xl shadow-2xl p-4">
                                <h3 className="text-coffee text-[12px] md:text-xs font-bold">Moccaccino</h3>
                                <p className="md:text-xs text-coffee text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sit.</p>
                            </div>

                            <div className="">
                                <img src="/icons/mug1.png" alt="" />
                            </div>
                        </div>
                      <div className="mt-4 p-4">
                                <div className="bg-coffee rounded-full p-2 flex space-x-12 justify-center items-center">
                                    <img src="/icons/home.png" alt="" className="md:w-8 md:h-8 w-6 h-6 filter invert brightness-0" />
                                    <img src="/icons/cart.png" alt="" className="md:w-8 md:h-8 w-6 h-6 filter invert brightness-0"/>
                                    <img src="/icons/user.png" alt="" className="md:w-8 md:h-8 w-6 h-6 filter invert brightness-0"/>
                                    <img src="/icons/menu.png" alt="" className="md:w-8 md:h-8 w-6 h-6 filter invert brightness-0"/>
                                </div>
                            </div>  
        </div>

        
        <div className="w-full rounded-3xl bg-white/50">

            <div>
                <h1 className="text-coffee text-xl font-bold pl-4 pt-2">&lt;</h1>
            </div>
            <div className="">
                <img src="/icons/cup.png"/>
            </div>

             <div className="p-4">
                <h3 className="text-coffee text-[20px] font-semibold ">Latte Grand</h3>
                <p className="text-coffee text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita temporibus nam consectetur! Blanditiis, laborum animi exercitationem ea possimus impedit optio enim facere asperiores aut quidem! Et harum esse dolore?</p>
            </div>

            <div className="flex justify-between items-center pr-4">
            <div className="flex justify-between items-center space-x-6 p-6 mb-5">
            <div className="bg-white/50 rounded-2xl shadow-2xl w-12 h-8 flex justify-center items-center text-sm p-2">$3.50</div>
            <div className="bg-white/50 rounded-2xl shadow-2xl w-12 h-8 flex justify-center items-center text-sm p-2 ">
                <img src="/icons/heart.png" className="md:w-4 md:h-4 w-2 h-2 "/>
            </div>
            </div>

            <div className="bg-coffee  rounded-2xl h-10 w-30 p-2 flex items-center justify-between">
                <div className="text-[12px] text-white">Add to Cart</div>
                <div className="bg-white/20 rounded-full text-[12px] font-bold text-white w-6 h-6 flex justify-center items-center">
                <img src="/icons/plus.png" className="md:w-3 md:h-3 w-2 h-2 filter invert brightness-0"/>
                </div>
            </div>
            </div>

        </div>

        <div>
            <div className="p-6">
                <h1 className="text-4xl text-coffee font-bold mb-6">App is Available</h1>
                <p className="text-sm text-coffee ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil, tempore ab, inventore vero reprehenderit commodi possimus quae necessitatibus veniam reiciendis blanditiis officia! Unde odit tenetur blanditiis, magni ut eos sequi aperiam labore sed cumque maxime porro rerum numquam perspiciatis consectetur natus debitis officia? Officiis dolores illum excepturi laboriosam error!</p>
            </div>
            <div className="flex space-x-6 p-6">
                <div className="bg-white/50 rounded-2xl shadow-2xl w-12 h-12 flex justify-center items-center">
                    <img src="icons/apple.png" className="w-8 h-8"/>
                </div>
            <div className="bg-white/50 rounded-2xl shadow-2xl w-12 h-12 flex justify-center items-center">
                <img src="icons/play.png" className="w-8 h-8"/>
            </div>
            </div>
            
        </div>
    </div>
    </>

}