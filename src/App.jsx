
import Banner from "./components/Banner/Banner"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import TopList from "./components/toplist/TopList"
import Hero from "./Hero/Hero"
import {Toaster} from "react-hot-toast"


const App = () => {

  return (
  
    <div className="w-[90vw]  flex  flex-col items-center">
     <Navbar/>
     <Hero/>
     <TopList/>
     <Banner/>
     <Footer/>
     <Toaster/>
    </div>

  
  )
}

export default App
