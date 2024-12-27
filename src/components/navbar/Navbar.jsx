import {motion,AnimatePresence} from "framer-motion"
import profile from "../navbar/myprofile.png"
import { ArrowDownIcon, ShoppingCart, X } from "lucide-react"
import { useContext, useState } from "react"
import Cartcontext from "../context/Createcart"
import Carts from "../cart/Carts"

const livarrients={
    hidden:{
        scaleX:1,
       
    },
    visible:{
        scaleX:[1,1.2],
        borderBottom:"1px solid red",
        color:"red",
        transition:{type:"spring",stiffness:120}
    }
}

const buttonvar={
    visible:{
   
      scale:[1,1.2,1],
      transition:{repeat:1,duration:2}
  
    },
    hover:{
      scale:[1.01],
    
      textShadow:"0px 0px 8px rgb(80, 55, 26)",
      boxShadow:"0px 0px 8px rgb(112, 84, 42)",
      transition:{repeat:0}
    }
  }

  const presence={
    hidden:{
        x:"100vw",
  
    },
    visible:{
        x:0,
        
        transition:{
            duration:0.3
        }
    },
  
  }

const Navbar = () => {

  const {addcart}=useContext(Cartcontext)
    const [mobileview,setmobileview]=useState(false)
    const [showcartitem,setshowcartitem]=useState(false)
   
   
    const cartshowfunc=()=>{
      setshowcartitem(!showcartitem)
      
    }

  return (
    <div className='py-3 border-b fixed z-50 w-[100vw] shadow-2xl rounded-lg md:w-[80vw] px-9 bg-gradient-to-r nav from-orange-300 backdrop-blur-lg bg-opacity-40 border-gray-600/40  '>
      <div className="continer  px-8  flex items-center justify-between">
        {/* Logo Section */}
        <div>
            <p className="text-lg font-semibold">FOOD <span className="text-red-500">EAT</span></p>
        </div>

        {/* menusection */}
        <div className="hidden md:block sm:flex">
            <ul className="flex  gap-8 py-1 ">
                <motion.li variants={livarrients} initial="hidden" whileHover="visible" className="uppercase cursor-pointer">Home</motion.li>

                <motion.li variants={livarrients} initial="hidden" whileHover="visible" className="uppercase cursor-pointer">Menu</motion.li>

                <motion.li variants={livarrients} initial="hidden" whileHover="visible" className="uppercase cursor-pointer">About</motion.li>
            </ul>
        </div>
        {/* login Section */}
        <div className="size-10 relative  rounded-full flex items-center sm:gap-0 gap-3">
            <img src={profile}  className="rounded-full " alt="noimg" />
            <div onClick={cartshowfunc} className="hover:text-red-800 md:ml-8 cursor-pointer">
            <sup className=" absolute font-bold text-red-900 left-[67px] top-1">{addcart.length}
            </sup>
          <ShoppingCart className="font-bold hover:text-red-800 text-black"/>
            </div>
            <div className={`sm:hidden ${showcartitem?"hidden":"block"}`}  onClick={()=>setmobileview(!mobileview)}>
              {
                !mobileview?(
                  <ArrowDownIcon/>
                ):(
                  <X/>
                )
              }
           
            </div>
        </div>
      </div>
      <AnimatePresence>

     {
         mobileview&&(
            <AnimatePresence>

      <motion.div variants={presence} initial="hidden" animate="visible" exit={{x:"-100vw"}} style={{boxShadow:"0px 0px 8px rgb(250, 163, 0)"}} className="fixed bg-gradient-to-r from-orange-400 to-orange-100 flex h-[70vh] text-black text-bold my-2 item md:hidden border right-0 z-30 rounded-s-3xl w-[60vw]">
        <ul className="flex gap-3 my-8 items-center w-[60vw]  flex-col">
            <motion.li onClick={()=>setmobileview(false)} className="w-full p-3 cursor-pointer text-center" variants={buttonvar} whileHover="hover" animate="visible">Home</motion.li>

            <motion.li onClick={()=>setmobileview(false)} className="w-full p-3 cursor-pointer text-center" variants={buttonvar} whileHover="hover" animate="visible">About</motion.li>

            <motion.li onClick={()=>setmobileview(false)} className="w-full p-3 cursor-pointer text-center" variants={buttonvar} whileHover="hover" animate="visible">Menu</motion.li>
           <div className="flex cursor-pointer gap-9 mt-9">
            <div>
            <motion.li onClick={()=>setmobileview(false)} className="w-full cursor-pointer text-center" variants={buttonvar} whileHover="hover" animate="visible">SIGNIN</motion.li>
            </div>
            <div>
            <motion.li onClick={()=>setmobileview(false)} className="w-full cursor-pointer text-center" variants={buttonvar} whileHover="hover" animate="visible">SIGNUP</motion.li>

            </div>

           </div>
           
        </ul>
      </motion.div>
    
            </AnimatePresence>
        )
    }
 
    </AnimatePresence>
    {
      showcartitem&&(
    <motion.div  initial={{scaleX:0}} animate={{scaleX:1}} className="absolute w-[70vw] md:w-[50vw] overflow-auto h-[50vh] rounded-s-2xl text-center right-0 bg-black/90 text-white">
      {
        showcartitem&&(
          <div  onClick={cartshowfunc} className="absolute right-0">
            <X size={32}/>

          </div>
        )
      }
     <Carts/>
    </motion.div>

      )
    }
    </div>
  )
}

export default Navbar
