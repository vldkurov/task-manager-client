import {Route, Routes,} from "react-router-dom";
import {lazy, Suspense} from "react";
import Layout from "./components/Layout/Layout";

// import RequireAuth from "../components/RequireAuth/RequireAuth";


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage'));
const TaskPage = lazy(() => import('./pages/TaskPage/TaskPage'));
const CreateTaskPage = lazy(() => import('./pages/CreateTaskPage/CreateTaskPage'));
// const ProductDetailsPage = lazy(() => import('../pages/ProductDetailsPage/ProductDetailsPage'));
// const CartPage = lazy(() => import('../pages/CartPage/CartPage'))
// const CheckoutPage = lazy(() => import('../pages/CheckoutPage/CheckoutPage'));
// const OrdersPage = lazy(() => import('../pages/OrdersPage/OrdersPage'));
// const OrderDetailsPage = lazy(() => import('../pages/OrderDetailsPage/OrderDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


const AppRoutes = () => {
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}> {/* Provide a fallback */}
                <Routes>
                    {/*/!* Public Routes *!/*/}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    {/*/!* Protected Routes *!/*/}
                    <Route path="/tasks" element={<TasksPage/>}/>
                    <Route path="/tasks/:taskId" element={<TaskPage/>}/>
                    <Route path="/tasks/new" element={<CreateTaskPage/>}/>
                    {/*/!* Fallback for unmatched routes *!/*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </Layout>
    )
}


export default AppRoutes
