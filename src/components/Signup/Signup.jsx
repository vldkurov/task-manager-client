import React from 'react';
import {useDispatch} from 'react-redux';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {signupUser} from "../../features/auth/authOperations";
import {useNavigate} from "react-router-dom";

// Validation schema
const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
});

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{username: '', password: '', confirmPassword: ''}}
            validationSchema={SignupSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                dispatch(signupUser({
                    username: values.username,
                    password: values.password
                }));
                resetForm(); // Reset the form after submission
                setSubmitting(false);
                navigate('/')
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="username" placeholder="Username"/>
                    <ErrorMessage name="username" component="div"/>

                    <Field type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password" component="div"/>

                    <Field type="password" name="confirmPassword" placeholder="Confirm Password"/>
                    <ErrorMessage name="confirmPassword" component="div"/>

                    <button type="submit" disabled={isSubmitting}>
                        Sign Up
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Signup;
