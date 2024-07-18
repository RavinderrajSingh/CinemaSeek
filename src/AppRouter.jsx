import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, About, Movies, ContactUs } from "./Index";
import RootApp from "./RootApp";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootApp />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<ContactUs />} />
        </Route>
    )
);

export default AppRouter;