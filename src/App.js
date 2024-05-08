import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./router";
import AuthLayout from "./components/AuthLayout/AuthLayout";

const App = () => {

    return (
        <AuthLayout>
            <Router>
                <AppRoutes/>
            </Router>
        </AuthLayout>
    )

};

export default App;
