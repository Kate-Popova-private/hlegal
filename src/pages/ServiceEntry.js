import React, {useEffect} from 'react';
import "../styles/serviceEntry.scss"
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    serviceCardLoading,
    serviceCardLoadingFailed,
    serviceCardLoadingSuccess
} from "../store/action/serviceCardAction";
import {doc, getDoc} from "firebase/firestore";
import {db, storage} from "../firebase";
import {getDownloadURL, ref} from "firebase/storage";
import Loader from "../components/Loader/Loader";
import Publications from "../components/publications";
import ServiceCard from "../components/serviceCard";

const ServiceEntry = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {loading, fullService, error} = useSelector((store) => store.service);
    const {img, title, shortContent, fullContent} = {...fullService};


    useEffect(() => {

        dispatch(serviceCardLoading());
        (async () => {

            let benefitsRef = doc(db, `benefits/${id}`);
            let serviceBenefitsRef = doc(db, `serviceBenefits/${id}`);

            const benefitsSnap = await getDoc(benefitsRef);
            const serviceBenefitsSnap = await getDoc(serviceBenefitsRef);


            if (benefitsSnap.exists() && serviceBenefitsSnap.exists()) {
                let benefitsData = benefitsSnap.data();
                let serviceBenefitsData = serviceBenefitsSnap.data();
                benefitsData.img = await getDownloadURL(ref(storage, `benefits/${benefitsData.img}`));

                dispatch(serviceCardLoadingSuccess({...benefitsData, ...serviceBenefitsData}));
            } else {
                dispatch(serviceCardLoadingFailed());
            }

        })()
    }, [id])
    return (
        <>
            <div className="bg-container">
                <div className="service">
                    {loading ? <Loader></Loader>
                        : <ServiceCard id={id} img={img} title={title}
                                       content={[shortContent, fullContent]}></ServiceCard>
                    }
                    <Link className={"service__btn_free"}>Free consultation</Link>
                    <div className="features">
                        <h4 className="features__title">Services in this area:</h4>
                        <div className="features__list-wrap">
                            <div className="features__list">
                                {fullService && fullService.list.map((item, index) =>
                                    <p className="features__item" key={`ftr_${index}`}>{item}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Publications></Publications>

        </>
    );
};

export default ServiceEntry;