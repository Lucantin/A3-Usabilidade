import React from 'react';
import './style.css';

const Footer = () => {

    const currentDate = new Date();

    const options = {
        hour: 'numeric',
        minute: 'numeric'
    };

    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString([], options);


    return (
        <>
            <footer className='footer'>
                <div className='footer-content'>
                    <div>
                        <img className='image-top' src={require("../../assets/logoTop1.png")} alt="pic" />
                    </div>
                    <p>{formattedDate} {formattedTime}</p>
                    <div className='right-images'>
                        <img className='image-top' src={require("../../assets/logoVisa.png")} alt="pic" />
                        <img className='image-top' src={require("../../assets/logoMaster.png")} alt="pic" />
                        <img className='image-top' src={require("../../assets/logoElo.png")} alt="pic" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;