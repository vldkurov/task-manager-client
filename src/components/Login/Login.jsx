import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {loginUser} from "../../features/auth/authOperations";
import {useNavigate} from "react-router-dom";

// Validation schema
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {isAuthenticated} = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/tasks');
        }
    }, [isAuthenticated, navigate]);

    return (
        <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                dispatch(loginUser({
                    username: values.username,
                    password: values.password
                }));
                resetForm(); // Reset the form after submission
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="username" placeholder="Username"/>
                    <ErrorMessage name="username" component="div"/>

                    <Field type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password" component="div"/>

                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Login;

