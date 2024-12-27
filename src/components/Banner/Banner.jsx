import banner from "../../pixelLab/banner.png"
import {motion} from "framer-motion"

const Banner = () => {
  return (
    <div >
      <motion.div
      initial={{scale:0}}  whileInView={{scale:1}}
      className='flex border-b border-gray-950/75 pb-9 ml-14 w-[90vw]  mb-8 text-center flex-col md:flex-row justify-center items-center'>
        <div className="w-[300px] md:w-[800px]  flex justify-center">
            <img src={banner} alt="" />
        </div>
        <div className="justify-end -mt-16 items-center">
            <h1 className="font-bold text-3xl mt-5">Food Is Always Good</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat numquam reprehenderit, alias perspiciatis debitis laboriosam distinctio ab ipsam animi sed hic cum magni architecto cumque itaque adipisci voluptate expedita? Corrupti, quis? Voluptates, temporibus tenetur.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Banner
