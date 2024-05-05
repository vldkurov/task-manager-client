import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '../components/Signup/Signup';
import {Provider} from "react-redux";
import {store} from "../redux/store";

describe('Signup Component', () => {
    // Test for rendering component
    test('renders Signup form with all fields and button', async () => {
        render(
            <Provider store={store}>
                <Signup/>
            </Provider>
        );
        const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText(/password/i);

        expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(confirmPasswordInput).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /sign up/i})).toBeInTheDocument();
    });

    // Test for input interaction
    test('allows user to enter data into form fields', async () => {
        render(
            <Provider store={store}>
                <Signup/>
            </Provider>);

        const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText(/password/i);

        await fireEvent.change(screen.getByPlaceholderText(/username/i), {target: {value: 'newuser'}});
        await fireEvent.change(passwordInput, {target: {value: 'newpassword'}});
        await fireEvent.change(confirmPasswordInput, {target: {value: 'newpassword'}});

        expect(screen.getByDisplayValue('newuser')).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(confirmPasswordInput).toBeInTheDocument();
    });

    // Test for form submission
    test('handles form submission', async () => {
        render(
            <Provider store={store}>
                <Signup/>
            </Provider>);

        const submitButton = screen.getByRole('button', {name: /sign up/i});
        const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText(/password/i);

        await fireEvent.change(screen.getByPlaceholderText(/username/i), {target: {value: 'newuser'}});
        await fireEvent.change(passwordInput, {target: {value: 'newpassword'}});
        await fireEvent.change(confirmPasswordInput, {target: {value: 'newpassword'}});

        await fireEvent.click(submitButton);

        // Since actual submission handling might involve state or API interaction, you might want to:
        // - Mock API calls
        // - Spy on function calls (e.g., if using Redux, test if dispatch was called)
        // - Check for navigation changes (use `MemoryRouter` from `react-router-dom` if necessary)
    });
});
