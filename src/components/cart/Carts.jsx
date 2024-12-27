import  { useContext } from 'react'
import Cartcontext from '../context/Createcart'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'

const Carts = () => {
    const {addcart,setaddcart}=useContext(Cartcontext)
    
  //   const buttonplus=(id)=>{
  //     let findindex=addcart.findIndex((ele)=>ele.id===id.id)
     
       
  //       addcart[findindex].qunty+=1
  //       toast.success("your quantity is increase",addcart[findindex].qunty)
   
  //  }

   const delecart=(ele)=>{
   
    const ncart=addcart.filter((cart)=>cart.id!==ele.id)
    toast.success(`${ele.name} Deleted From Cart`)
    setaddcart(ncart)
   }

  return (
    <div className='w-full mt-6'>
      
      {
        addcart.length>0?addcart?.map((ele)=>{
         return <div className='flex justify-start text-xs  items-center' key={ele.id}>
              
                <img className='w-16 ml-1' src={ele.img} alt="" />
                <p className='mr-1'>{ele.name}</p>
                <button  className='btn px-2 hover:bg-white/30'>${ele.price*ele.qunty}</button>
                <span className='mx-3'>{ele.qunty}</span>

                
               
                <button className='ml-6' onClick={()=>delecart(ele)}><X size={14}/></button>
            </div>
}):(
  <div className='flex items-center text-lg font-semibold shadow-2xl justify-center my-28'>Your Cart Is Empty!</div>
)
      }

      <div>Total Price :${
     addcart.reduce((acc,ele)=>ele.price*ele.qunty+acc,0)
        }</div>
    </div>
  )
}

export default Carts
