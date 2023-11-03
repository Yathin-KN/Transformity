import { MainNav } from "@/components/custom/main_nav";
import useModeStore from "@/store/mode"
import clsx from "clsx";
import { motion } from "framer-motion"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import axiosClient from "@/apis/axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});



const ContactUsForm: React.FC = () => {
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const addContactFormData = async (formData: ContactFormValues) => {
        const id = toast.loading("Please wait...")
        try {
           
            setIsLoading(true)
          const response = await axiosClient.post(`/client/feedback`, formData);
      
          if (response.status !== 201) {
            throw new Error(`Response status is not Created`);
          }
          toast.update(id, {render: "All is good", type: "success", isLoading: false , autoClose:1000});
        } catch (error) {
            toast.update(id, {render: "Something went wrong", type: "error", isLoading: false , autoClose:1000});
          throw error;
        }finally{
            setIsLoading(false)
        }
      };
  
      
    const handleSubmit = (values: ContactFormValues, { resetForm }: any) => {
      addContactFormData(values)
      console.log(values);
      resetForm();
    };
  
    const { mode } = useModeStore();
  
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={ContactUsSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className={`block mb-2 font-saira ${mode === 'light' ? 'text-black' : 'text-white'}`}
            >
              Name
            </label>
            <Field
              type="text"
              name="name"
              className={`w-full p-2 font-saira ${
                mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'
              } border-b`}
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>
  
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block mb-2 font-saira ${mode === 'light' ? 'text-black' : 'text-white'}`}
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              className={`w-full p-2 font-saira ${
                mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'
              } border-b`}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
  
          <div className="mb-4">
            <label
              htmlFor="message"
              className={`block mb-2 font-saira ${mode === 'light' ? 'text-black' : 'text-white'}`}
            >
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              className={`w-full p-2 font-saira ${
                mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'
              } border-b`}
              placeholder="Message"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
          </div>
  
          <button
            type="submit"
            disabled={isLoading}
            className={`py-2 px-4 rounded  inline-flex gap-3 font-saira ${
              mode === 'light' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            {isLoading && <Loader2 className="animate-spin text-xl" />}
            <span>Submit</span>
          </button>
        </Form>
      </Formik>
    );
  };
  




const Contact_us = () => {
const {mode}=useModeStore();
  return (
    <div className={clsx(" w-full",{
        "bg-white":(mode=="light"),
           "bg-black":(mode=="dark"),
      })}>
        <div className={clsx({
        "bg-white":(mode=="light"),
           "bg-black":(mode=="dark"),
      })}>
          <MainNav />
        </div>
        <ToastContainer />
        <div className={clsx("w-full flex justify-center py-10   md:py-10 overflow-hidden  ",{
           "text-black":(mode=="light"),
           "text-white":(mode=="dark"),
        })}>
            <motion.p
              className="text-xl md:text-[9rem] flex justify-center relative items-center w-full h-auto md:py-10 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="opacity-20 md:opacity-10 tracking-tighter md:tracking-[1.3rem] text-center py-3 mx-4 font-island normal-case text-[8rem] md:text-[17rem]">
                Transformity
              </p>
              <motion.p
                className="text-3xl md:text-7xl absolute uppercase tracking-[0.5rem]  md:tracking-[1.5rem] font-extrabold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, spacing: 2 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
               
                CONTACT US
              </motion.p>
            </motion.p>
          </div>
        <div className={clsx("w-full min-h-screen  flex justify-center items-center h-auto p-4 md:px-10",{
          "bg-white":(mode=="light"),
          "bg-black":(mode=="dark"),
        })}>
            <div className="md:w-[80%]">
            <ContactUsForm/>
              
            </div>
       </div>
       </div>
  )
}

export default Contact_us