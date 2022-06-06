/* eslint-disable @next/next/no-img-element */
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Eyecatch.module.scss';
import { NextPage } from 'next';

const Eyecatch: NextPage = () => {
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
      <div
        className='slider'
        style={{
          width: '100%',
          margin: '0',
          padding: '0',
          position: 'relative',
        }}
      >
        <Slick {...settings}>
          {imgArray.map((img, index) => (
            <div key={index.toString()}>
              <img
                src={img}
                alt='トップイメージ'
                style={{ width: '100%', height: '85vh', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Slick>
        <div className={styles.catchCopy}>
          一級品のユニフォームを手頃に手軽に届けたい。
        </div>
      </div>
    </>
  );
};
export default Eyecatch;
