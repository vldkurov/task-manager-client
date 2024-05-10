import {Route, Routes,} from "react-router-dom";
import {lazy, Suspense} from "react";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import {Box, CircularProgress} from "@mui/material";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage'));
const TaskPage = lazy(() => import('./pages/TaskPage/TaskPage'));
const CreateTaskPage = lazy(() => import('./pages/CreateTaskPage/CreateTaskPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


const AppRoutes = () => {
    return (
        <Layout>
            <Suspense fallback={<Box display="flex" justifyContent="center" alignItems="center"
                                     minHeight="100vh"><CircularProgress/></Box>}>
                <Routes>
                    {/*/!* Public Routes *!/*/}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    {/*/!* Protected Routes *!/*/}
                    <Route path="/tasks" element={<RequireAuth><TasksPage/></RequireAuth>}/>
                    <Route path="/tasks/:taskId" element={<RequireAuth><TaskPage/></RequireAuth>}/>
                    <Route path="/tasks/new" element={<RequireAuth><CreateTaskPage/></RequireAuth>}/>
                    {/*/!* Fallback for unmatched routes *!/*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </Layout>
    )
}


export default AppRoutes
