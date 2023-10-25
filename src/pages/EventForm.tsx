import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useUserStore from "@/store/authStore";
import { MainNav } from "@/components/custom/main_nav";
import { ToastContainer, toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import "react-toastify/ReactToastify.css"
import axiosClient from "@/apis/axios";
interface EventFormProps {}
interface EventFormData {
  title: string;
  desc: string;
  photo:  File | any;
  startDate: string;
  endDate: string | undefined;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
}

const initialValues: EventFormData = {
  title: "",
  desc: "",
  photo: null,
  startDate: "",
  endDate: undefined,
  eventTime: "",
  eventLocation: "",
  eventDescription: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  desc: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date(),
  eventTime: Yup.string().required("Event time is required"),
  eventLocation: Yup.string().required("Event location is required"),
  eventDescription: Yup.string().required("Event description is required"),
});
const EventForm: React.FC<EventFormProps> = () => {
  const info=useUserStore(state=>state.getUserInfo);
  const [isLoading,setIsLoading]=useState<boolean>(false)
  const {user_id}=info();

  const postEvent=async(formData: any)=>{
    try{
      setIsLoading(true)
      const response = await axiosClient.post(
        "/admin/addEvent",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response)
    }catch(error){
      toast.error("Error posting event",{
        autoClose:1500
      })
    }finally{
      setIsLoading(false)
    }
  }
  const onSubmit = async (values: EventFormData) => {
    console.log(values)
    const formData = new FormData();
   console.log(values.desc)
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    formData.append("startDate", values.startDate);
    formData.append("endDate", values.endDate || "");
    formData.append("eventTime", values.eventTime);
    formData.append("eventLocation", values.eventLocation);
    formData.append("eventDescription", values.eventDescription);
    formData.append("user_id",user_id);
    console.log(formData)

    if (values.photo instanceof File) {
      formData.append("photo", values.photo);
    }
    // const response = await axios.post(
    //   "https://vcw4zbgl-2000.inc1.devtunnels.ms/api/admin/addEvent",
    //   formData,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    // console.log(response);
    postEvent(formData)
  };
  return (
    <>
    <div className="bg-black">
    <MainNav />
    </div>
    <div className="py-4 px-4 w-full min-h-screen h-auto bg-black">
      <ToastContainer toastClassName={() => 
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
      }/>
      <h1 className="text-5xl font-bold font-saira text-white">Compose Events</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="max-w-md mx-auto mt-8 bg-black p-4 rounded shadow-md">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.title && touched.title ? (<div className="text-red-500 text-sm mt-1">{errors.title}</div>) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="desc"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Short Description
              </label>
              <Field
                as="textarea"
                id="desc"
                name="desc"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="desc"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="bg-black font-saira  border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event: any) => {

                  if (event.target.files && event.target.files.length > 0) {
                    const file = event.currentTarget.files[0];
                    setFieldValue("photo", file);
                  }

                } } />
              <div>
                {errors.photo && errors.photo ? (<div className="text-red-500 text-sm mt-1">
                  required
                </div>) : null}
              </div>

            </div>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Start Date
              </label>
              <Field
                type="date"
                id="startDate"
                name="startDate"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="startDate"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                End Date (Optional)
              </label>
              <Field
                type="date"
                id="endDate"
                name="endDate"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="endDate"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="eventTime"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Event Time
              </label>
              <Field
                type="time"
                id="eventTime"
                name="eventTime"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="eventTime"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="eventLocation"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Event Location
              </label>
              <Field
                type="text"
                id="eventLocation"
                name="eventLocation"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="eventLocation"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="eventDescription"
                className="block font-saira text-white text-md font-bold mb-2"
              >
                Event Description
              </label>
              <Field
                as="textarea"
                id="eventDescription"
                name="eventDescription"
                className="bg-black border-x-0 border-t-0 border-b-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="eventDescription"
                component="div"
                className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 font-saira border border-white rounded-sm hover:bg-blue-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline flex gap-1 justify-center items-center"
              disabled={isLoading}
            >
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null} submit

            </button>
          </Form>
        )}
      </Formik>
    </div></>
  );
};

export default EventForm;
