import React, { useEffect, useRef } from "react";
import { Cursor } from "react-simple-typewriter";
import Typed from "typed.js";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Shailesh Store", "Goswami Store"],
      loop:{},
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      showCursor: false,
    };
    typedRef.current = new Typed(".typing-text", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p style={{fontSize:"20px"} } >
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
          </p>
          <br />
           <div className="Text">
             Welcome To <span className="typing-text"></span>
          </div>
              <br />
              <br />  
              
          <div className="ctas">
            <div className="banner-cta" >Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
