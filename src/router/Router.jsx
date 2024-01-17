import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { Gallery } from "../pages/Gallery/Gallery";
import { Collection } from "../pages/Collection/Collection";
import { Oeuvre } from "../pages/Oeuvre/Oeuvre";
import { Page404 } from "../pages/Page404/Page404";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="collection" element={<Collection />} />
                <Route path="gallery/:id" element={<Oeuvre />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
        
    )
}