import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">

                        Welcome to our e-commerce website!
                         We are a trusted online platform that offers
                          a wide range of products to meet your needs.
                           With a user-friendly interface, seamless navigation,
                            and secure transactions, we aim to provide you with 
                            a convenient and enjoyable shopping experience.
                             Explore our diverse collection, featuring high-quality items
                              at competitive prices, and stay updated with the latest trends.
                               Join our growing community of satisfied customers and start s
                               hopping with confidence today!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Khargone Rd,Badud,Sanawad,Indore,
                            Madhya Pradesh, 451111
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 8462866771</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: goswamishailesh172@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    {/* <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span> */}
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        SHAILESHSTORE 2023 CREATED BY SHAILESH GOSWAMI. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
