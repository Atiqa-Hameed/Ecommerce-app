import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const initialValues = {
    email: '',
    password: '',
    ...(isLogin ? {} : { confirmPassword: '', name: '' }), 
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    ...(isLogin
      ? {}
      : {
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
          name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .required('Name is required'),
        }),
  });

  const onSubmit = (values) => {
    if (isLogin) {
      // Handle login submission
      setMessage(`Welcome back, ${values.email}! You have successfully logged in.`);
    } else {
      // Handle signup submission
      setMessage(`Thank you for signing up, ${values.name}! Please log in.`);
    }
    console.log('Form Data', values);
  };

  const toggleFormMode = () => {
    setIsLogin((prevMode) => !prevMode);
    setMessage(''); // Clear message when switching forms
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
      
      {message && (
        <div className="mb-4 p-3 text-center bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        <Form>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password:
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </Form>
      </Formik>

      <div className="mt-4 text-center">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button
              type="button"
              onClick={toggleFormMode}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button
              type="button"
              onClick={toggleFormMode}
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;



