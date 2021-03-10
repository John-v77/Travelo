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
            <h3>Here are only a few of all the like-new items you can buy/sell/trade on WhyNew!</h3>
            <Slider {...settings}>
      <div >
        <img className= 'apple' src = './Images/iphone range.jpg' alt= 'apple'/>
      </div>
      <div>
      <img className= 'samsung' src = './Images/s21transp.png' alt= 'S21'/>
      </div>
      <div>
      <img className= 'macbook' src = './Images/macbookairwhtbg.png' alt= 'macbook'/>
      </div>
      <div>
      <img className= 'apple2' src = './Images/iphone transparent.png' alt= 'apple2'/>
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