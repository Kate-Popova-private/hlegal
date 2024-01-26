import React, {useEffect, useState} from 'react';
import "../styles/serviceEntry.scss"
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    serviceLoading,
    serviceLoadingSuccess
} from "../store/action/serviceAction";

import Loader from "../components/Loader/Loader";
import PublicationsList from "../components/publicationsList";
import ServiceCard from "../components/serviceCard";
import axios from "axios";
import ModalForm from "../components/Modal/ModalForm";
import {modalMessageAdd} from "../store/action/modalMessageAction";


const ServiceEntry = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {loading, fullService, error} = useSelector((store) => store.service);
    const {img, title, shortDesc, fullDesc, list} = {...fullService};
    const [modal, setModal] = useState(false);
    const body = document.querySelector('body');
    const [response, setResponse] = useState({});


    function updateResponse(value) {
        setResponse(value);
    }

    useEffect(() => {
        if (response.status === 200) {
            dispatch(modalMessageAdd({message: 'Your request has been sent :)'}));
        }
        if (response.status >= 500) {
            dispatch(modalMessageAdd({message: 'Server error, try you later :('}));
        }


    }, [response])

    useEffect(() => {
        if (modal) {
            body.style.overflow = 'hidden';
        } else
            body.style.overflow = 'unset';

    }, [modal])

    useEffect(() => {

        dispatch(serviceLoading());

        axios.get(`http://hlegal/api.php?type=services&id=${id}`).then(({data}) => {
            dispatch(serviceLoadingSuccess(data.result));
            console.log('type=services', data.result);
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
                    <Link className={"service__btn_free"} onClick={() => setModal(true)}>Free consultation</Link>
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
            <PublicationsList topPage='news' title="Recommended" link={true}></PublicationsList>
            <ModalForm isOpen={modal} onClose={() => setModal(false)} updateResponse={updateResponse}></ModalForm>
        </>
    );
};

export default ServiceEntry;