import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "./NotFound";

export default function MainRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}