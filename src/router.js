import {Route, Routes,} from "react-router-dom";
import {lazy, Suspense} from "react";
import Layout from "./components/Layout/Layout";

// import RequireAuth from "../components/RequireAuth/RequireAuth";


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
// const ProductsByCategoryPage = lazy(() => import('../pages/ProductsByCategoryPage/ProductsByCategoryPage'))
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
                    {/*<Route path="/products/all" element={<ProductsPage/>}/>*/}
                    {/*<Route path="/products/all/:categoryId" element={<ProductsByCategoryPage/>}/>*/}
                    {/*<Route path="/products/:productId" element={<ProductDetailsPage/>}/>*/}
                    {/*/!* Protected Routes *!/*/}
                    {/*<Route path="/cart/:cartId" element={<RequireAuth><CartPage/></RequireAuth>}/>*/}
                    {/*<Route path="/carts/:cartId/checkout" element={<RequireAuth><CheckoutPage/></RequireAuth>}/>*/}
                    {/*<Route path="/orders" element={<RequireAuth><OrdersPage/></RequireAuth>}/>*/}
                    {/*<Route path="/orders/:orderId" element={<RequireAuth><OrderDetailsPage/></RequireAuth>}/>*/}
                    {/*/!* Fallback for unmatched routes *!/*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </Layout>
    )
}


export default AppRoutes
