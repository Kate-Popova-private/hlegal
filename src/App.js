import './App.css';
import {createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider} from "react-router-dom";
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
                    <Route path="/services" element={<Services/>}
                           handle={{
                               crumb: (data) => <Link to="/services">services</Link>
                           }}
                    />
                    <Route path="/services/:id" element={<ServiceEntry/>}
                           handle={{
                               crumb: (data) => <Link to="/services">services</Link>
                           }}
                    />
                    <Route path="/about"
                           handle={{
                               crumb: (data) => <Link to="/about">about</Link>
                           }}/>
                </Route>
            ), {basename: "/hlegal"})
        }/>
    );
}

export default App;
