import { Navbar } from "./components/Navbar";
import { Menu } from "./pages/Menu";
import { Cappuccino } from "./pages/Cappuccino";
import { Top_items } from "./pages/Top_items";
import { Choose } from "./pages/Choose";
import { Hero } from "./pages/Hero";
import { useEffect } from "react";
import Lenis  from "lenis";
import { Footer } from "./components/Footer";


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
        <div className="fixed inset-0 w-full h-screen bg-[url('/bgs/bg09.jpg')] bg-cover bg-center bg-fixed bg-no-repeat -z-10"/>
        <div className="w-full">
        <Navbar/>

        <div className="w-full min-h-screen bg-yellow-400/10 backdrop-blur-2xl">
        <Hero/>
        <Top_items/>
        <Cappuccino/>
        <Menu/>
        <Choose/>
        <Footer/>
        </div>
        </div>
      </main>
  );
}
export default App;