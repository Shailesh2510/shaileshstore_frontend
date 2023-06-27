import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import  Confirmation from "../src/components/Cart/Confirmation"
import Shipping from "../src/components/Cart/ShippingForm"
import Payment from "../src/components/Cart/Payment"
import Success from "../src/components/Cart/success"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Unsuccess from "../src/components/Cart/unsucces"
// import ResetPassword from "./pages/ResetPassword/ResetPassword"
import Order from "../src/components/OrderHistory/Orderhistory"



    function App() {
        return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    {/* <Route path="/resetpasswords" element={<ResetPassword />} /> */}
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/success" element={<Success/>} />
                    <Route path="/unsuccess" element={<Unsuccess/>} />
                    <Route path="/order" element={<Order/>} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}
export default App;