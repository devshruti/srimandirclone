import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PujaDetails from "../pages/PujaDetails";
import Puja from "../pages/Puja";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puja/:id" element={<PujaDetails />} />
            <Route path="/puja" element={<Puja />} />

        </Routes>
    )
}