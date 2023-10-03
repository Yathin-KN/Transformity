import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@/store/authStore';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

interface SigIn{
    email:string;
    password:string;
}
const SignIn = () => {
  const navigate= useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const handleSubmit = async (values:SigIn) => {
    try {
      const response = await axios.post('http://localhost:2000/api/client/signin', {
        email: values.email,
        password: values.password,
      });

      const { user_id, email, access_token } = response.data;

      setUser(user_id, email, access_token);

      navigate('/');

      console.log('Signin successful:', response.data);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md m-10">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
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

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;