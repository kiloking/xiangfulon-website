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
      className='w-full  h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover text-zinc-900'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg05.png' })`}}
    >
      <motion.div 
      initial={{ opacity: 0,y:'10' }}
      animate={{ opacity: 1,y:0 }}
      transition={{
        ease: "easeInOut",
        duration: .6,
        delay: 0.5,
      }}
      className=' absolute bottom-5 left-5 text-lg'>
        <div className='text-xl mb-5'>新北市三重區三德街36號</div>  
        <div className='border-l-4 border-red-700 pl-4'>
          <div>TEL 02-2857-9933</div> 
          <div>FAX 02-2857-0033</div>
        </div>
      </motion.div>
      <motion.div className='absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-4/5 md:w-2/5 h-1/2'>
        <motion.div 
        initial={{ opacity: 0,y:'10' }}
        animate={{ opacity: 1,y:0 }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.1,
        }}
        className=''>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto my-10 text-lg  rel" data-aos="fade-up" data-aos-duration="1500" >
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                  px-2 py-2 " placeholder="詢問主題"   {...register("subject", { required: true})}/>
            </div>
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                  px-2 py-2 " placeholder="姓名"   {...register("name", { required: true})}/>
            </div>
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                  px-2 py-2 " placeholder="公司名稱"   {...register("company", { required: true})}/>
            </div>
            <div className='w-full  my-2 '>
              <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full 
                  px-2 py-2 " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
            </div>
            <div className='w-full my-2 '>
              <input type="mail" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full
                  px-2 py-2 " placeholder="電子信箱"   {...register("mail", { required: true})}/>
            </div>
            <div className='w-full my-2 '>
              <textarea name="" id="" cols="10" rows="3" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full
                  px-2 py-2 " placeholder="請輸入訊息" {...register("msg", { required: true})}></textarea>
            </div>

            <div className='flex w-3/4 mx-auto gap-10 my-10'>
              <button className='border-zinc-900 border px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='submit'>送出</button>
              <button className='border-zinc-900 border px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='reset'>清除</button>
            </div>
            <div>{error}  {mailSent}</div>            
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact