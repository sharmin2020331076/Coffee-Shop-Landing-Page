import { Navbar } from "./components/Navbar";
import { Menu } from "./pages/Menu";
import { Cappuccino } from "./pages/Cappuccino";
import { Top_items } from "./pages/Top_items";
import { Choose } from "./pages/Choose";
import { Hero } from "./pages/Hero";
import { CustomerReviews } from "./pages/CustomerReviews";
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
        <div className="fixed inset-0 w-full h-screen bg-[url('/bgs/new_bg.png')] bg-cover bg-center bg-no-repeat -z-10"/>
        <div className="w-full">
        <Navbar/>

        <div className="w-full min-h-[100dvh] bg-yellow-950/20">
        <section id="home">
          <Hero/>
        </section>
        <Top_items/>
        <section id="about">
          <Cappuccino/>
        </section>
        <section id="menu">
          <Menu/>
        </section>
        <Choose/>
        <CustomerReviews/>
        <section id="contact">
          <Footer/>
        </section>
        </div>
        </div>
      </main>
  );
}
export default App;