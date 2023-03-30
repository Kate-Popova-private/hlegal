import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Services";
import ServiceEntry from "./pages/ServiceEntry";

function App() {
    return (
        <RouterProvider router={createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/services/:id" element={<ServiceEntry/>}/>
                </Route>
            ), {basename: "/hlegal"})
        }/>
    );
}

export default App;
