import Button from "../components/Button";

export function Hero(){

    const icons = [
    {id:1, icon:"/icons/cup.png",alt:"Cup"},
    {id:2, icon:"/icons/beans.png",alt:"Beans"},
    {id:3, icon:"/icons/bubble.png",alt:"Coffee"},
    {id:4, icon:"/icons/coffee-cup (1).png",alt:"Coffee Cup"},
  ];


    return(
        <div className="pt-20 grid grid-cols-2 just">
            <div className="">
                <div className="space-y-2">
                    <h1 className="text-5xl text-coffee font-bold font-sans">Coffee</h1>
                    
                    <h1 className="text-5xl text-coffee font-bold">The Best For You</h1>
                </div>
                <Button text="View Menu" background="var(--color-coffee)" height="48px" width="128px"/>
                
                <div className="flex space-x-4">
                {icons.map(icon => (
                    <div key={icon.id} className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/50 shadow-2xl">
                    <img src={icon.icon} alt={icon.alt} className="w-8 h-8 " />
                    </div>
                ))}
                </div>

            </div>

            <div>
                <img src="/photo/cup6.png" alt="cup" 
                className="h-100 w-100"/>
            </div>
        </div>
    )
}