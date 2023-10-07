import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useUserStore from "@/store/authStore";
import { MainNav } from "@/components/custom/main_nav";
import { ToastContainer, toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import "react-toastify/ReactToastify.css"
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
      const response = await axios.post(
        "https://vcw4zbgl-2000.inc1.devtunnels.ms/api/admin/addEvent",
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
    <><MainNav /><div className="py-4 px-4">
      <ToastContainer toastClassName={() => 
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
      }/>
      <h1 className="text-2xl font-bold">Compose Events</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="max-w-md mx-auto mt-8">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.title && touched.title ? (<div className="text-red-500 text-sm mt-1">{errors.title}</div>) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="desc"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Short Description
              </label>
              <Field
                as="textarea"
                id="desc"
                name="desc"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="desc"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Start Date
              </label>
              <Field
                type="date"
                id="startDate"
                name="startDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="startDate"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                End Date (Optional)
              </label>
              <Field
                type="date"
                id="endDate"
                name="endDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="endDate"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="eventTime"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Event Time
              </label>
              <Field
                type="time"
                id="eventTime"
                name="eventTime"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="eventTime"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="eventLocation"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Event Location
              </label>
              <Field
                type="text"
                id="eventLocation"
                name="eventLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="eventLocation"
                component="div"
                className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="eventDescription"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Event Description
              </label>
              <Field
                as="textarea"
                id="eventDescription"
                name="eventDescription"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage
                name="eventDescription"
                component="div"
                className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex gap-1 justify-center items-center"
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