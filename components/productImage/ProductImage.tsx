/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './ProductImage.module.scss';

const ProductImage: NextPage<any> = ({ item }) => {
  const [images, setImages] = useState([]);
  const [imgCount, setImgCount] = useState(0);

  useEffect(() => {
    const images: any = [];
    for (let i = 0; i <= 10; i++) {
      if (item['image' + i]) {
        images.push(item['image' + i]['url']);
      }
    }
    setImages(images);
  }, [item]);

  const settings = {
    customPaging: function (index: any) {
      return (
        <a>
          <img src={`${images[index]}`} alt={`画像${index}`} />
        </a>
      );
    },
    dots: true,
    className: 'product-slick',
    dotsClass: 'product-slick-dots slick-thumb',
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={`${styles.productSlider} w-full`}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <img
              key={index}
              src={`${img}?fm=webp&w=500`}
              alt='画像'
              style={{
                objectFit: 'cover',
              }}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ProductImage;
