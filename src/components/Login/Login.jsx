import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {loginUser} from "../../features/auth/authOperations";
import {useNavigate} from "react-router-dom";
import {TextField, Typography} from '@mui/material';
import {StyledButton, StyledFormBox} from "./Login.styled";

// Validation schema
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/tasks');
        }
    }, [isAuthenticated, navigate]);

    return (
        <StyledFormBox sx={{mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={LoginSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    dispatch(loginUser({
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
                      isSubmitting
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                        />
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            sx={{mt: 3, mb: 2}}
                        >
                            Login
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </StyledFormBox>
    );
};

export default Login;

