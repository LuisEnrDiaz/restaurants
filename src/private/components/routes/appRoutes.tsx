import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { Restaurant } from "../restaurant/restaurant";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
