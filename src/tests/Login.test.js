import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login/Login';
import {Provider} from "react-redux";
import {store} from "../redux/store";

describe('Login Component', () => {

    test('allows user to enter login information', async () => {
        render(
            <Provider store={store}>
                <Login/>
            </Provider>
        );

        // Wrap the sequence of events in act if they trigger updates not automatically managed
        await fireEvent.change(screen.getByPlaceholderText(/username/i), {target: {value: 'testuser'}});
        await fireEvent.change(screen.getByPlaceholderText(/password/i), {target: {value: 'password123'}});

        expect(screen.getByDisplayValue('testuser')).toBeInTheDocument();
        expect(screen.getByDisplayValue('password123')).toBeInTheDocument();
    });

    test('submits login information', async () => {
        render(
            <Provider store={store}>
                <Login/>
            </Provider>
        );

        // Fill in the form fields
        await fireEvent.change(screen.getByPlaceholderText(/username/i), {target: {value: 'testuser'}});
        await fireEvent.change(screen.getByPlaceholderText(/password/i), {target: {value: 'password123'}});

        // Use act to wrap fireEvent when clicking a button that triggers asynchronous operations
        await fireEvent.click(screen.getByRole('button', {name: /login/i}));

        // Add assertions here
        // Since the form submission likely involves a state or API interaction, you may need to mock these
        // For example, use jest.mock to mock API calls or check state changes if using Redux
        // Example assertion could be checking if a loading spinner is displayed or if a certain action was dispatched
    });
});
