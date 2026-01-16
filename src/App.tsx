import { Navbar } from "./components/Navbar";
import { Mobile } from "./pages/Mobile";
import { Cappuccino } from "./pages/Cappuccino";
import { Cart } from "./pages/Cart";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";
import { useEffect } from "react";
import Lenis  from "lenis";


function App(){

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return(

      <main className="w-full min-h-screen">
        <div className="fixed inset-0 w-full h-screen bg-[url('/bgs/bg88.jpg')] bg-cover bg-center bg-fixed bg-no-repeat -z-10"/>
        <div className="w-full">
        <Navbar/>

        <div className="w-full min-h-screen bg-yellow-400/10 backdrop-blur-2xl">
        <Hero/>
        <Cart/>
        <Cappuccino/>
        <Mobile/>
        <Footer/>
        </div>
        </div>
      </main>
  );
}
export default App;