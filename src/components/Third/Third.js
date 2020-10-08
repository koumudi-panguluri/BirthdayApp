import React, { useEffect } from 'react'
import { FaSmile, FaMicrophone} from 'react-icons/fa'
import Koumi from '../../assets/images/koumi.png'
import './Third.css';

export default() =>{
    useEffect(()=>{
        for(let i=1;i<=4;i++){
            setTimeout(()=>{
                document.getElementById(i.toString()).style.display = "block";
            }, 2000*i);
        }
    })
    return(
        <div className="last">
            <div className="header">
                <div className="row">
                    <div className="col-1">
                        <div className="photo">
                            <img alt="pic" src={ Koumi }/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="contact-name">
                            <p>Koumi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message-body">
                <div className="right-message" id="1">
                    <p className="message">Happy Birthday Koumi!!! Eeeeeee</p>
                    <p className="time">00:00</p>
                </div>
                <div className="left-message" id="2">
                    <p className="message">Eeeee! Thank you Toishiluu!</p>
                    <p className="time">00:00</p>
                </div>
                <div className="right-message" id="3">
                    <p className="message">This web app is progressive, just like you!!!</p>
                    <p className="time">00:00</p>
                </div>
                <div className="left-message" id="4">
                    <p className="message">Awesome..! Thanks alot.</p>
                    <p className="time">00:01</p>
                </div>
            </div>
            <div className="footer">
                <div className="row">
                    <div className="col-1">
                        <FaSmile className="first-emoji"/>
                    </div>
                    <div className="col-4">
                        <div className="message-bar">
                            <p className="box-placeholder">Type a message</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <FaMicrophone className="last-emoji"/>
                    </div>
                </div>
            </div>
        </div>
    )
}