import React,{useState} from 'react'
import { useForm, reset } from "react-hook-form";
import { motion } from "framer-motion";
function Contact() {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    defaultValues:{
      subject:"",
      name:"",
      company:"",
      tel: "",
      mail: "",
      msg: "",
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
        reset()
      }
    }).catch(error => console.log('error'));


  };
  return (
    <div 
      className='w-full  min-h-screen  relative bg-center bg-no-repeat bg-cover text-zinc-900 bg-fixed'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg05.png' })`}}
    >
      
      <motion.div className='flex w-full justify-center items-center  min-h-screen flex-col relative pt-14 md:pt-0'>
        <motion.div 
        initial={{ opacity: 0,y:'10' }}
        animate={{ opacity: 1,y:0 }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.1,
        }}
        className='w-9/12 mx-auto md:w-1/3'>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto my-10 text-lg  rel" data-aos="fade-up" data-aos-duration="1500" >
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                  px-2 py-2 " placeholder="????????????"   {...register("subject", { required: true})}/>
            </div>
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                  px-2 py-2 " placeholder="??????"   {...register("name", { required: true})}/>
            </div>
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                  px-2 py-2 " placeholder="????????????"   {...register("company", { required: true})}/>
            </div>
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full 
                  px-2 py-2 " placeholder="????????????"    {...register("tel", { required: true})}/>
            </div>
            <div className='w-full my-2 '>
              <input type="mail" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full
                  px-2 py-2 " placeholder="????????????"   {...register("mail", { required: true})}/>
            </div>
            <div className='w-full my-2 '>
              <textarea name="" id="" cols="10" rows="3" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full
                  px-2 py-2 " placeholder="???????????????" {...register("msg", { required: true})}></textarea>
            </div>

            <div className='flex w-3/4 mx-auto gap-10 my-10'>
              <button className='border-zinc-900 border px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='submit'>??????</button>
              <button className='border-zinc-900 border px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='reset'>??????</button>
            </div>
            <div>{error}  {mailSent}</div>            
          </form>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0,y:'10' }}
        animate={{ opacity: 1,y:0 }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.5,
        }}
        className=' relative md:absolute my-6  md:my-0 md:bottom-5 left-0 md:left-5 text-lg'>
          <div className='text-xl mb-5'>???????????????????????????36???</div>  
          <div className='border-l-4 border-red-700 pl-4'>
            <div>TEL 02-2857-9933</div> 
            <div>FAX 02-2857-0033</div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Contact