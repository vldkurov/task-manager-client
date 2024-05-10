import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {signupUser} from "../../features/auth/authOperations";
import {useNavigate} from "react-router-dom";
import {Typography} from '@mui/material';
import {StyledBox, StyledButton, StyledTextField} from "./Signup.styled";

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
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/tasks');
        }
    }, [isAuthenticated, navigate]);

    return (
        <StyledBox sx={{mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Formik
                initialValues={{username: '', password: '', confirmPassword: ''}}
                validationSchema={SignupSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    dispatch(signupUser({
                        username: values.username,
                        password: values.password
                    }));
                    resetForm();
                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      errors,
                      touched
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <StyledTextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="Username"
                            type="text"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.username && Boolean(errors.username)}
                            helperText={touched.username && errors.username}
                        />
                        <StyledTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        <StyledTextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </StyledBox>
    );
};

export default Signup;

