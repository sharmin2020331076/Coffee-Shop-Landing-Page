import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";


function App(){
  return(
      <main className="w-full min-h-screen"
      style={{backgroundImage: "url('/bgs/bg2.jpg')"}}>
        <div className="w-full h-32 mb-2">
        <Navbar/>

        <div className="w-full min-h-screen bg-yellow-400/10 backdrop-blur-xl">
        <Hero/>
          
        </div>

        </div>

        
        
      </main>
  );
}
export default App;