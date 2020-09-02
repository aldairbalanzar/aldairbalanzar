import React from 'react';
import greetings from '../text/greetings_text'
import Typist from 'react-typist';
import aldair_persona from '../media/aldair_persona.png';

export const Modal = ({ content }) => {
    return (
    <div className="modal-wrapper">
        <div className="modal-backdrop"></div>
        <i className='modal-x fa fa-times'></i>
        <div className="modal">
            <img className="aldair-persona" src={aldair_persona} alt="aldair in persona art style"/>
            <div className="speech-container" >
                <h1>Aldair Balanzar</h1>
                <Typist avgTypingDelay={25}>
                    {content.map(paragraph => {
                        return(
                            <div>
                                <p>{paragraph}</p>
                            </div>
                        )
                    })}
                </Typist>
            </div>
        </div>
    </div>
    )
}

export default Modal;
