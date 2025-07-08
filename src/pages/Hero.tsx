import Button from "../components/Button";

export function Hero(){

    const icons = [
    {id:1, icon:"/icons/expresso.png",alt:"Cup"},
    {id:2, icon:"/icons/expresso.png",alt:"Beans"},
    {id:3, icon:"/icons/expresso.png",alt:"Coffee"},
    {id:4, icon:"/icons/expresso.png",alt:"Coffee Cup"},
  ];


    return(
        <div className="pt-20">
            <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 items-center">
                <div className="p-8 lg:p-16 space-y-8 flex flex-col">
                <div className="space-y-2">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-coffee font-bold font-sans">Coffee</h1>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-coffee font-bold font-sans">The Best For You</h1>
                </div>
                <div className="space-y-6">
                    <div>
                    <Button text="View Menu" background="var(--color-coffee)" height="48px" width="128px"/>
                </div>

                <div className="flex space-x-6 pt-4">
                {icons.map(icon => (
                    <div key={icon.id} className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white/50 shadow-2xl">
                    <img src={icon.icon} alt={icon.alt} className="w-8 h-8 " />
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