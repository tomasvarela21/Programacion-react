import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Habilita el modo centro
    centerPadding: '0', // Elimina el relleno en los extremos
  };

  return (
    <div>
      <h2>Galeria de los + grandes y san lorenzo</h2>
      <Slider {...settings}>
        <div style={{ textAlign: 'center' }}>
          <img className='contendorImagen'
               src={require('../imagen/boca.png')} alt='treecko' style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <img className='contendorImagen'
               src={require('../imagen/dk.png')} alt='treecko' style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <img className='contendorImagen'
               src={require('../imagen/river.png')} alt='treecko' style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <img className='contendorImagen'
               src={require('../imagen/sanlorenzo.png')} alt='treecko' style={{ maxWidth: '80%', maxHeight: '80%', margin: '0 auto' }} />
        </div>
      </Slider>
    </div>
  );
}

export default MySlider;