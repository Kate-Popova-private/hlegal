import React from 'react';
import './modal.scss';
import Close from "../../assets/img/Close.svg";


const Modal = ({isOpen, onClose}) => {
    return (
        <>
            {isOpen && (
                <section className="modal-wrapper">
                    <div className="modal">
                        <h2 className="modal__title">We would like to help you</h2>
                        <img src={Close} alt="close button" className="modal__btn-close"
                             onClick={() => onClose(false)}></img>
                        <form action="#" className="modal__form ">
                            <input type="text" name="name" className="modal__name modal__input"
                                   placeholder="Name"></input>
                            <textarea name="message" className="modal__message modal__input"
                                      placeholder="Message"></textarea>
                            <span className="modal__text">How to answer you?</span>
                            <input type="text" name="tel" className="modal__tel modal__input"
                                   placeholder="Phone number"></input>
                            <input type="text" name="email" className="modal__email modal__input"
                                   placeholder="Email"></input>
                            <button type="submit" className="modal__btn-submit">Send message</button>
                        </form>
                    </div>
                </section>
            )
            }
        </>
    );
};

export default Modal;