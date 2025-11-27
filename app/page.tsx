import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Accommodation from "./components/Accommodation"
import Services from "./components/Services"
import Footer from "./components/Footer"



export default function Home() {
  return (
     <main>
      {
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Accommodation/>
        <Services/>
        <Footer/>
        </>

      }
    </main>
  );
}
