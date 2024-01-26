import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Navigate,
    Route,
    Router,
    RouterProvider, useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Services";
import ServiceEntry from "./pages/ServiceEntry";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {languageSelected} from "./store/action/languageAction";

import Publications from "./pages/Publications/index";
import PublicationCard from "./pages/PublicationCard/PublicationCard";
import ModalMessage from "./components/Modal/ModalMessage";
import About from "./pages/About";
import Team from "./pages/Team";


function App() {
    // const { pathname } = useLocation();
    //
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname]);

    const dispatch = useDispatch();
    dispatch(languageSelected('EN'));


    return (
        <>
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
                        <Route path="/about" element={<About/>}
                               handle={{
                                   crumb: (data) => <Link to="/about">about</Link>
                               }}/>
                        <Route path="/team" element={<Team/>}
                                           handle={{
                                               crumb: (data) => <Link to="/team">team</Link>
                                           }}/>
                        <Route path="/publications" element={<Publications/>}
                               handle={{
                                   crumb: (data) => <Link to="/publications">publications</Link>
                               }}/>
                        <Route path="/publication/:id" element={<PublicationCard/>}
                               handle={{
                                   crumb: (data) => <Link to="/publications">publications</Link>
                               }}/>
                    </Route>
                )
                , {basename: "/hlegal"})

            }/>
            <ModalMessage></ModalMessage>
        </>
    );

}

export default App;
