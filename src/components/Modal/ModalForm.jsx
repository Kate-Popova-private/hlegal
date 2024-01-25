import React, {useEffect, useState} from 'react';
import './modal.scss';
import Close from "../../assets/img/Close.svg";
import {useForm} from "react-hook-form";


const ModalForm = ({isOpen, onClose, updateResponse}) => {

    const [responseJson, setResponseJson] = useState({});
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        criteriaMode: 'all',
    });

    function sendData(data) {
        // axios.post("http://hlegal/regist.php", {data})
        //     .then(response => {
        //         console.log('response', response)
        //     }).catch(error => console.log('error', error));

        fetch('http://hlegal/controllers/addMessage.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            // mode: 'no-cors',
            body: JSON.stringify(data)
        }).then(async response => {
            setResponseJson(await response.json());
            if (response.status === 200 || response.status >= 500) {
                onClose(false);
                updateResponse(response);
            }
        })
            .catch(error => console.log('error ', error));
    }

    function deleteError(event) {
        setResponseJson({response: responseJson, ...responseJson[`${event.target.getAttribute('name')}`] = ''})
    }

    // document.querySelector('modal-wrapper').addEventListener('click', (e) => {
    //     if (e.currentTarget === this) {
    //         onClose(false)
    //
    //     }
    // })

    function closeForm(e) {
        if (e.target === document.querySelector('.modal-wrapper')) onClose(false)
    }

    return (
        <>
            {isOpen && (
                <section className="modal-wrapper" onClick={closeForm}>
                    <div className="modal">
                        <h2 className="modal__title">We would like to help you</h2>
                        <img src={Close} alt="close button" className="modal__btn-close"
                             onClick={() => onClose(false)}></img>
                        <form onSubmit={handleSubmit((data) => sendData(data))}
                              className="modal__form ">
                            <input {...register('name', {required: true, minLength: 1, maxLength: 100})}
                                   onInput={(event) => deleteError(event)}
                                   type="text"
                                   name="name"
                                   className="modal__name modal__input"
                                   placeholder="Name"></input>
                            {
                                errors.name?.type === 'required' &&
                                <p className="modal__error">Name is required</p>
                            }

                            {
                                (errors.name?.type === 'minLength' || errors.name?.type === 'maxLength') &&
                                <p className="modal__error">Name is incorrect</p>
                            }
                            {
                                responseJson['name'] && <p className="modal__error">{responseJson['name']}</p>
                            }
                            <textarea {...register('message', {required: true, minLength: 5, maxLength: 2000})}
                                      onInput={(event) => deleteError(event)}
                                      name="message" className="modal__message modal__input"
                                      placeholder="Message"></textarea>
                            {
                                errors.message?.type === 'required' &&
                                <p className="modal__error">Message is required</p>
                            }
                            {
                                (errors.message?.type === 'minLength' || errors.name?.type === 'maxLength') &&
                                <p className="modal__error">Message must be at least 10 characters and no more
                                    than 2000
                                    characters</p>
                            }
                            {
                                responseJson['message'] && <p className="modal__error">{responseJson['message']}</p>
                            }
                            <span className="modal__text">How to answer you?</span>
                            <input  {...register('tel', {required: true})}
                                    onInput={(event) => deleteError(event)}
                                    type="text"
                                    name="tel"
                                    className="modal__tel modal__input"
                                    placeholder="Phone number"></input>
                            {
                                errors.tel?.type === 'required' &&
                                <p className="modal__error">Phone number is required</p>
                            }
                            {
                                responseJson['tel'] && <p className="modal__error">{responseJson['tel']}</p>
                            }
                            <input {...register('email', {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            })}
                                   onInput={(event) => deleteError(event)}
                                   type="text" name="email"
                                   className="modal__email modal__input"
                                   placeholder="Email"></input>
                            {
                                errors.email?.type === 'required' &&
                                <p className="modal__error">Email is required</p>
                            }
                            {
                                errors.email?.type === 'pattern' &&
                                <p className="modal__error">Email is incorrect</p>
                            }
                            {
                                responseJson['email'] && <p className="modal__error">{responseJson['email']}</p>
                            }
                            <button type="submit" className="modal__btn-submit">Send message</button>
                        </form>
                    </div>
                </section>
            )
            }
        </>
    )
        ;
};

export default ModalForm;