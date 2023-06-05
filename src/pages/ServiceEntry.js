import React, {useEffect} from 'react';
import "../styles/serviceEntry.scss"
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    serviceLoading,
    serviceLoadingFailed,
    serviceLoadingSuccess
} from "../store/action/serviceAction";
import {doc, getDoc} from "firebase/firestore";
import {db, storage} from "../firebase";
import {getDownloadURL, ref} from "firebase/storage";
import Loader from "../components/Loader/Loader";
import PublicationsList from "../components/publicationsList";
import ServiceCard from "../components/serviceCard";
import axios from "axios";


const ServiceEntry = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {loading, fullService, error} = useSelector((store) => store.service);
    const {img, title, shortDesc, fullDesc, list} = {...fullService};



    useEffect(() => {

        dispatch(serviceLoading());

        axios.get(`http://hlegal/api.php?type=services&id=${id}`).then(({data}) => {
            dispatch(serviceLoadingSuccess(data.result));
console.log('data.result', data.result)
        })
    }, [id])
    return (
        <>
            <div className="bg-container">
                <div className="service">
                    {loading ? <Loader></Loader>
                        : <ServiceCard id={id} img={img} title={title}
                                       content={[shortDesc, fullDesc]}></ServiceCard>
                    }
                    <Link className={"service__btn_free"}>Free consultation</Link>
                    <div className="features">
                        <h4 className="features__title">Services in this area:</h4>
                        <div className="features__list-wrap">
                            <div className="features__list">
                                {fullService && fullService.list.split('|').map((item, index) =>
                                    <p className="features__item" key={`ftr_${index}`}>{item}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PublicationsList title = "Recommended"></PublicationsList>

        </>
    );
};

export default ServiceEntry;