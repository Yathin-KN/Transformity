import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
interface FormValues {
    username: string;
    email: string;
    password: string;
    profilePic: File | any;
}

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  profilePic: Yup.mixed().required('Required'),
});

export const SignUp = () => {
  const navigate= useNavigate();

  const handleSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('profilePic', values.profilePic);

      const response = await axios.post('http://localhost:2000/api/client/createUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/signin');

      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md m-10">
      <h1 className="text-2xl font-bold mb-6">User Registration</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          profilePic: null,
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched , setFieldValue}) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <Field type="text" name="username" className="w-full border border-gray-300 p-2 rounded" />
              {errors.username && touched.username ? (
                <div className="text-red-500 text-sm mt-1">{errors.username}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <Field type="email" name="email" className="w-full border border-gray-300 p-2 rounded" />
              {errors.email && touched.email ? <div className="text-red-500 text-sm mt-1">{errors.email}</div> : null}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <Field type="password" name="password" className="w-full border border-gray-300 p-2 rounded" />
              {errors.password && touched.password ? (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="profilePic" className="block text-gray-700 font-bold mb-2">Profile Picture</label>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={(e)=>{
                    if (e.target.files && e.target.files.length > 0) {
                        setFieldValue("profilePic", e.target.files[0]);
                    }
                }}
              />
              {errors.profilePic && touched.profilePic ? (
                <div className="text-red-500 text-sm mt-1">{errors.profilePic}</div>
              ) : null}
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
