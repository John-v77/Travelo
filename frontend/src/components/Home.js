import React from 'react';
import Slider from 'react-slick';
import './Home.css'


function Home(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <h3>Home</h3>
            <Slider {...settings}>
      <div >
        <img className= 'Apple' src = './Images/iphone range.jpg' alt= 'apple'/>
      </div>
      <div>
      <img className= 'Android' src = './Images/androidtransp.png' alt= 'android'/>
      </div>
      <div>
      <img className= 'Macbook' src = './Images/13-inch-macbook-pro-2020-old-mbp-100867680-large.jpg' alt= 'macbook'/>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

            
        </>
    );
}

export default Home;