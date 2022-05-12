import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Eyecatch() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };
  const imgArray = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];
  return (
    <>
      <ul
        className='slider'
        style={{ width: '100%', margin: '0', padding: '0' }}
      >
        <Slick {...settings}>
          {imgArray.map((img) => (
            <>
              <li>
                <img
                  src={img}
                  alt=''
                  style={{ width: '100%', height: '85vh', objectFit: 'cover' }}
                />
              </li>
            </>
          ))}
        </Slick>
      </ul>
    </>
  );
}
