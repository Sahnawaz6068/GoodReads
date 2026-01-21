import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "./NotFound";
import Signup from "../Pages/Auth/Signup";
import Signin from "../Pages/Auth/Signin";
import Dashboard from "../Pages/Dashboard";
import BookDescription from "../Pages/BookDescription";

export default function MainRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/book/description" element={<BookDescription/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}