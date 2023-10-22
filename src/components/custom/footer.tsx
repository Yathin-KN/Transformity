import { Facebook, Instagram, LucideLinkedin, Mail } from "lucide-react"
import { FaTwitter, FaWhatsapp } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
   <div>
     <div className="w-full flex justify-between px-10 py-6 bg-black">
      <div className="flex flex-col flex-nowrap">
        <div className="text-3xl font-saira tracking-wide">
           <p  className="text-5xl font-saira tracking-wide uppercase" >ready for your <br/> <span className="text-5xl font-saira tracking-wide uppercase text-red-500">next</span>  lesson ?</p>
           <p></p>
        </div>
        <p className="flex flex-nowrap justify-start items-center w-full py-3 space-x-4"><Mail size={24} strokeWidth={1} />
          <Link to="">transformity@gmail.com</Link>
        </p>
      </div>
      <div className="">
         <div className="text-center pb-6 text-2xl font-saira uppercase tracking-widest">
            Socials
         </div>
         <li className="flex gap-6">
            <ul className="text-2xl"><FaWhatsapp  /></ul>
            <ul><LucideLinkedin/></ul>
            <ul><Instagram/></ul>
            <ul><Facebook/></ul>
            <ul className="text-2xl"><FaTwitter/></ul>
         </li>
      </div>
    </div>
    <p className="w-full text-sm text-white bg-black py-2 text-center">Copyright@2023</p>
   </div>
  )
}

export default Footer