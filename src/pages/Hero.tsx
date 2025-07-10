import Button from "../components/Button";

export function Hero(){

    const icons = [
    {id:1, icon:"/icons/icon3.png",alt:"Cup"},
    {id:2, icon:"/icons/icon4.png",alt:"Beans"},
    {id:3, icon:"/icons/icon2.png",alt:"Coffee"},
    {id:4, icon:"/icons/icon1.png",alt:"Coffee Cup"},
  ];


    return(
        <div className="">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <div className="lg:pl-16 pl-8 pt-8 lg:pt-0 space-y-8 flex flex-col">
                <div className="space-y-2">
                    <h1 className="text-5xl md:text-5xl lg:text-7xl text-coffee font-bold font-sans">Coffee</h1>
                    <h1 className="text-5xl md:text-5xl lg:text-7xl text-coffee font-bold font-sans">The Best For You</h1>
                </div>
                <div className="space-y-6">
                    <div>
                    <Button text="View Menu" height="48px" width="128px" variant="gradient"/>
                </div>

                <div className="flex space-x-6 pt-4">
                {icons.map(icon => (
                    <div key={icon.id} className="flex items-center justify-center h-10 w-10 rounded-2xl bg-white/50 shadow-2xl">
                    <img src={icon.icon} alt={icon.alt} className="w-6 h-6  " />
                    </div>
                ))}
                </div>
                </div>

            </div>

            <div className="p-8 lg:p-16 flex md:items-center">
                <img src="/photo/cup6.png" alt="cup" 
                className="h-full w-full"/>
            </div>
            </div>
        </div>
    )
}