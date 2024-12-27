import piz from "../pixelLab/junk.png"
import {motion} from "framer-motion"
import { useMediaQuery } from "react-responsive"

// const sidevar={
//     hidden:{x:"-100vw"},
//     visible:{
//         x:0,
//         transition:{
//             type:"spring",
//             stiffness:120,
//            duration:7
//         }
//     }
// }
const Hero = () => {

     const isMobile=useMediaQuery({query:'(max-width:768px)'})

  return (
    <div className="flex mt-14 w-full justify-center items-center md:ml-28 ml-11 p-3 flex-col">

    <div className="container relative md:sticky md:mx-20 my-7 md:my-20 flex flex-col items-center md:flex-row">
      {/* textsecton */}

      <motion.div  initial={isMobile?{y:"-100vh"}:{x:"-100vw"}} animate={isMobile?{ y:0}:{x:0}} transition={{duration:1,type:"spring",stiffness:120}} className=" md:w-[70%]">
        <h1 className="text-5xl text-center font-bold">Deliciious Food Is Waiting For You</h1> 
        <p className="font-semibold opacity-65 mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem error vitae ea, velit delectus et suscipit cum, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni pariatur expedita corrupti. iusto vero Lorem ipsum dolor, sit amet consectetur

        </p>
        <div className="mt-4 mb-3 flex gap-4 items-center justify-center">
            <button className="primary-btn">Food Menu</button>
            <button className="secondary-btn">Food Table</button>
        </div>
      </motion.div>

      {/* imagesection */}
      <motion.div initial={isMobile?{y:"100vh"}:{x:"100vw"}} animate={isMobile?{y:-40}:{x:0,y:-160}} transition={{type:"spring",stiffness:80}} className="w-full flex justify-center items-center relative ">

        <motion.img animate={isMobile?{scale:[1,1.02,1],scaleY:[1,1.02,1],scaleX:[1,1.02,1],rotate:["1deg","0deg","1deg"]}:{scaleX:[1,1.02,1],scaleY:[1,1.02,1]}} transition={{repeat:Infinity, delay:1, duration:5}} src={piz} className="w-full rounded-full   size-[300px] md:size-[500px]  md:absolute top-32 md:-top-[92px]" alt="" />

      </motion.div>
   
      

    </div>
    </div>
  )
}

export default Hero
