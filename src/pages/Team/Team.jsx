import React, {useEffect, useState} from 'react';
import './team.scss';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {employeesListLoadingSuccess} from "../../store/action/employeesListAction";
import {Link} from "react-router-dom";

const Team = () => {
    const dispatch = useDispatch();
    const {employeesList} = useSelector((store) => store.employeesList);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://hlegal/api.php?type=employees').then(({data}) => {
            dispatch(employeesListLoadingSuccess(data.result));
            setEmployees(data.result);
            console.log('employeesList', employeesList);
        })
    }, [])

    return (<div className="employees">
        <h2 className="employees__title">We are used to taking responsibility and always guarantee honest, timely
            assistance, even in situations where most are powerless.</h2>
        <section className="employees__container">
            {employees.map(item => (
                <Link to={`/employee/${item.id}`}>
                    <div className="employees__employee">
                        <img src={`http://hlegal/${item.img}`} alt="" className="employees__img"/>
                        <span className="employees__name">{item.name}</span>
                        <span className="employees__position">{item.position}</span>
                    </div>
                </Link>
            ))}
        </section>
    </div>);
};

export default Team;