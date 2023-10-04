import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface FormValues {
  title: string;
  desc: string;
  photo?: File | null;
  username: string;
  categories?: string[];
  eventDate: Date;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
}

const EventSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  desc: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  eventDate: Yup.date().required('Required'),
  eventTime: Yup.string().required('Required'),
  eventLocation: Yup.string().required('Required'),
  eventDescription: Yup.string().required('Required'),
});

export const EventForm = () => {
  const handleSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('desc', values.desc);
      if (values.photo) {
        formData.append('photo', values.photo);
      }
      formData.append('username', values.username);
      formData.append('eventDate', values.eventDate.toISOString());
      formData.append('eventTime', values.eventTime);
      formData.append('eventLocation', values.eventLocation);
      formData.append('eventDescription', values.eventDescription);

      const response = await axios.post('http://localhost:2000/api/createEvent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Event created successfully:', response.data);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md m-10">
      <h1 className="text-2xl font-bold mb-6">Event Creation</h1>
      <Formik
        initialValues={{
          title: '',
          desc: '',
          photo: null,
          username: '',
          categories: [],
          eventDate: new Date(),
          eventTime: '',
          eventLocation: '',
          eventDescription: '',
        }}
        validationSchema={EventSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
              <Field type="text" name="title" className="w-full border border-gray-300 p-2 rounded" />
              {errors.title && touched.title ? (
                <div className="text-red-500 text-sm mt-1">{errors.title}</div>
              ) : null}
            </div>


            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
