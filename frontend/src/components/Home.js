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
        <img className= 'Sony' src = './Images/PS history.jpg' alt= 'PS'/>
      </div>
      <div>
      <img className= 'Apple' src = './Images/iphone range.jpg' alt= 'apple'/>
      </div>
      <div>
        <h3>3</h3>
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