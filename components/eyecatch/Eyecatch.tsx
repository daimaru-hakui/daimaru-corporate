/* eslint-disable @next/next/no-img-element */
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Eyecatch.module.scss';
import { NextPage } from 'next';

interface Props {
  images: {
    daimaruTopImg1: { url: string };
    daimaruTopImg2: { url: string };
    daimaruTopImg3: { url: string };
  };
}

const Eyecatch: NextPage<Props> = ({ images }) => {
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
  const imgArray = [
    `${images.daimaruTopImg1.url}`,
    `${images.daimaruTopImg2.url}`,
    `${images.daimaruTopImg3.url}`,
  ];
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
                src={`${img}?fm=webp`}
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
