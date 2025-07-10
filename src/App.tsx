import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Hero } from "./pages/Hero";


function App(){
  return(
      <main className="w-full min-h-screen">
        <div className = "fixed w-full h-full bg-[url('/bgs/bg9.jpg')] bg-cover bg-center z-(-10)"/>
        <div className="w-full h-32 mb-2">
        <Navbar/>

        <div className="w-full min-h-screen bg-yellow-400/10 backdrop-blur-2xl">
        <Hero/>
        <Cart/>
          
        </div>

        </div>

        
        
      </main>
  );
}
export default App;