import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Navigate,
    Route,
    Router,
    RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Services";
import ServiceEntry from "./pages/ServiceEntry";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {languageSelected} from "./store/action/languageAction";
import PublicationsList from "./components/publicationsList";
import Publications from "./pages/Publications/index";
import PublicationEntry from "./pages/PublicationEntry";

function App() {

    const dispatch = useDispatch();
    dispatch(languageSelected('EN'));

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
                    <Route path="/service/:id" element={<ServiceEntry/>}
                           handle={{
                               crumb: (data) => <Link to="/services">services</Link>
                           }}
                    />
                    <Route path="/about"
                           handle={{
                               crumb: (data) => <Link to="/about">about</Link>
                           }}/>
                    <Route path="/publications" element={<Publications/>}
                           handle={{
                               crumb: (data) => <Link to="/publications">publications</Link>
                           }}/>
                    <Route path="/publication/:id" element={<PublicationEntry/>}
                           handle={{
                               crumb: (data) => <Link to="/publications">publications</Link>
                           }}/>
                </Route>), {basename: "/hlegal"})
        }/>);
}

export default App;
