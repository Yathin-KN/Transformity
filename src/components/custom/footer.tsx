import { Facebook, Instagram, LucideLinkedin, Mail } from "lucide-react"
import { FaTwitter, FaWhatsapp } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
   <div>
     <div className="w-full flex  flex-col md:flex-row justify-between px-10 py-6 bg-black">
      <div className="flex flex-col flex-nowrap text-center md:text-left">
        <div className="text-3xl font-saira tracking-wide text-white">
           <p  className="text-4xl md:text-5xl font-saira tracking-wide uppercase" >ready for your <br/> <span className="text-5xl font-saira tracking-wide uppercase text-red-500">next</span>  lesson ?</p>
           <p></p>
        </div>
        <p className="flex flex-nowrap md:justify-start items-center w-full md:py-3 space-x-4 py-4  justify-center text-white"><Mail size={24} strokeWidth={1} />
          <Link to="" className="text-white">transformity@gmail.com</Link>
        </p>
      </div>
      <div className="text-white">
         <div className="text-center pb-6 text-2xl font-saira uppercase tracking-widest">
            Socials
         </div>
         <li className="flex gap-6 justify-evenly py-6">
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