
import { useContext } from "react"
import images from "../../pixelLab/burg1.png"
import images1 from "../../pixelLab/burg3.png"
import images2 from "../../pixelLab/piz2.png"
import shaw2 from "../../pixelLab/shaw2.png"
import {motion} from "framer-motion"
import Cartcontext from "../context/Createcart"
import toast from "react-hot-toast"





const fooditems=[
    {
      id:1,
        img:images,
        star:"🌟 🌟 🌟",
        name:"BURGER",
        quantity:1,
        price:34,
        desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit!"
    },
    {
      id:2,
        img:images1,
        star:"🌟 🌟 🌟",
        name:"Big Burger",
        quantity:1,
        price:24,
        desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit!"
    },
    {
      id:3,
        img:images2,
        star:"🌟 🌟 🌟 ",
        quantity:1,
        name:" PIZZA",
        desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit iure!",
        price:12
    },
    {
      id:4,
        img:shaw2,
        star:"🌟 🌟 🌟",
        quantity:1,
        name:"SHAWARMA",
        desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit iure!",
        price:10
      },
    ]
    
    const TopList = () => {
      const {addcart,setaddcart}=useContext(Cartcontext)
      
  const addcartitem=(id)=>{
    let findindex=addcart.findIndex((ele)=>ele.id===id.id)
    if(findindex>=0){
     addcart[findindex].qunty+=1
      toast.success(`${addcart[findindex].qunty} quantity added ${addcart[findindex].name}`)
    }
    else{
      setaddcart([...addcart,{...id,qunty:1}])
        toast.success(`${id.name} added to cart`)

    }
  }

 
  return (
    <>
    {/*  header section */}
    <div className="w-[screen] text-center mb-9 ml-16 md:mt-9 md:my-10 mx-8">
      <h1 className="text-4xl md:5xl font-bold mb-3 md:-mt-6 -mt-16">Top List</h1>
      <p>OUR TOP LISTS</p>
      
      {/* card section */}
      <div className="flex mt-8 justify-center gap-6 md:mt-11 flex-wrap  items-center md:flex-row">

        {/* imgages path */}
        {
            fooditems.map((ele)=>(
              
                
                <motion.div
                key={ele.id}
                initial={{scale:0}}
                whileHover={{scale:1.1,
                    boxShadow:("0px 0px 8px rgb(112, 84, 42"),
                
                }}
                whileInView={{scale:1}}
                className=" border border-gray-500/30 shadow-2xl box-shadow-2xl border-orange bg-gradient-to-t bg-white/55  rounded-2xl pb-3 w-[90px] md:w-[200px]">
                    <motion.img className="-mt-3"  src={ele.img} alt="" />
                    <div className="flex flex-col -mt-4 gap-2">
                      <span>{ele.star}</span>
                    <p className=" text-sm font-bold">{ele.name}</p>
                    {/* <p className="text-xs md:text-sm lg:text-md">{ele.desc.slice(0,18)}...</p> */}
                    <p className="text-xs md:text:sm lg:text-md">PRICE: <span className="font-bold">${ele.price}</span> </p>
                    <button onClick={()=>addcartitem(ele)} className="btn py-1 hover:bg-red-300 bg-green-200 rounded-full w-20 mx-auto text-xs md:sm">add to cart</button>
                    </div>
                </motion.div>

                      
            ))
        }
      </div>
    </div>
    </>
  )
}

export default TopList
