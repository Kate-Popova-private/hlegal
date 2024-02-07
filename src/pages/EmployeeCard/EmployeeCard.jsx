import React, {useEffect} from 'react';
import './employeeCard.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import axios from "axios";
import {employeeCardLoadingSuccess} from "../../store/action/employeeCardAction";

const EmployeeCard = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {employee} = useSelector(store => store.employeeCard);

    useEffect(() => {
        axios.get(`http://hlegal/api.php?type=employee&id=${id}`).then(({data}) => {
            dispatch(employeeCardLoadingSuccess(data.result));
            console.log('employee', data.result);
        })
    }, [id])

    useEffect(() => {

    }, [id])
    return (
        <div className="card">
            <section className="employee-card">
                <div className="employee-card__container">
                    <div className="employee-card__img-wrap">
                        <img src={`http://hlegal/${employee?.img}`} alt="employee image"
                             className="employee-card__img"/>
                    </div>
                    <div className="employee-card__info-wrap">
                        <h2 className="employee-card__name">{employee?.name}</h2>
                        <span className="employee-card__position">{employee?.position}</span>
                        <a href="#" className="employee-card__social">{employee?.email}</a>
                        <a href={employee?.linkedIn} className="employee-card__social">LinkedIn profile</a>
                    </div>
                    <div className="employee-card__desription-wrap">
                        <p className="employee-card__desription">{employee?.aboutMe}</p>
                        <span className="employee-card__caption">education</span>
                        <p className="employee-card__desription">{employee?.education}</p>
                        <span className="employee-card__caption">experience</span>
                        <p className="employee-card__desription">{employee?.experience}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmployeeCard;