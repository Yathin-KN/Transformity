import { MainNav } from "@/components/custom/main_nav";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import createPodcast from "@/apis/POST/addPodcast";
import { ToastContainer, toast } from "react-toastify";
import useUserStore from "@/store/authStore";
import clsx from "clsx";
import useModeStore from "@/store/mode";
interface FormValues {
  category: string;
  description: string;
  image: string;
  link: string;
}

const PodcastSchema = Yup.object().shape({
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  link: Yup.string().required("Required"),
});

const PodcastForm: React.FC = () => {
    const user_info = useUserStore(state=>state.getUserInfo)
    const {user_id} = user_info();
  //   const [podcasts, setPodcasts] = useState<FormValues[]>([]);

  //   useEffect(() => {
  //     const getAllPodcasts = async () => {
  //       try {
  //         const response = await axiosClient.get<FormValues[]>('/path/to/getAllPodcasts'); // Adjust the path
  //         setPodcasts(response.data);
  //       } catch (error) {
  //         console.error('Error fetching podcasts:', error);
  //       }
  //     };

  //     getAllPodcasts();
  //   }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      const resp = await createPodcast({...values,userId:user_id});

      console.log("Podcast created successfully", resp);
      toast.success(`Podcast created successfully`, {
        delay: 1500,
      });
    } catch (error) {
      console.error("Error creating podcast:", error);
    }
  };
 
  return (
    <div className="max-w-md mx-auto bg-black p-6 rounded-md shadow-md m-10 text-white">
      <ToastContainer
        toastClassName={() =>
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
        }
      />
      <h1 className="text-2xl font-bold mb-6 font-saira">Podcast Creation</h1>
      <Formik
        initialValues={{
          category: "",
          description: "",
          image: "",
          link: "",
        }}
        validationSchema={PodcastSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="category" className="block mb-2 font-saira">
                Category
              </label>
              <Field
                type="text"
                name="category"
                className="w-full p-2 bg-black border-b border-white font-saira"
                placeholder="Category"
              />
              {errors.category && touched.category ? (
                <div className="text-red-500 text-sm mt-1">
                  {errors.category}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block mb-2 font-saira">
                Description
              </label>
              <Field
                type="text"
                name="description"
                className="w-full p-2 bg-black border-b border-white font-saira"
                placeholder="Description"
              />
              {errors.description && touched.description ? (
                <div className="text-red-500 text-sm mt-1">
                  {errors.description}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block mb-2 font-saira">
                Image URL
              </label>
              <Field
                type="text"
                name="image"
                className="w-full p-2 bg-black border-b border-white font-saira"
                placeholder="Image URL"
              />
              {errors.image && touched.image ? (
                <div className="text-red-500 text-sm mt-1">{errors.image}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="link" className="block mb-2 font-saira">
                Link
              </label>
              <Field
                type="text"
                name="link"
                className="w-full p-2 bg-black border-b border-white font-saira"
                placeholder="Link"
              />
              {errors.link && touched.link ? (
                <div className="text-red-500 text-sm mt-1">{errors.link}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 font-saira"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const ComposePodcast = () => {
  const {mode}=useModeStore();
  return (
    <div className="w-full h-auto  min-h-screen">
      <div className={clsx({
            "bg-white":(mode==="light"),
             "bg-black":(mode==="dark"),
        })}>
        <MainNav />
      </div>
      <div className="w-full bg-black min-h-full h-auto py-10">
        <PodcastForm />
      </div>
    </div>
  );
};

export default ComposePodcast;
