/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const ProductImage: NextPage<any> = ({ item }) => {
  const [images, setImages] = useState([]);
  const [imgCount, setImgCount] = useState(0);

  useEffect(() => {
    const array: any = [
      item.image0 && item.image0.url,
      item.image1 && item.image1.url,
      item.image2 && item.image2.url,
      item.image3 && item.image3.url,
      item.image4 && item.image4.url,
      item.image5 && item.image5.url,
      item.image6 && item.image6.url,
      item.image7 && item.image7.url,
      item.image8 && item.image8.url,
      item.image9 && item.image9.url,
      item.image10 && item.image10.url,
    ];
    const images: any = [];
    array.forEach((image: string | undefined) => {
      if (image === undefined) return;
      images.push(image);
    });
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
    className: "product-slick",
    dotsClass: "product-slick-dots slick-thumb",
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider w-full">
        <Slider {...settings}>
          {images.map((img, index) => (
            <img
              key={index}
              src={`${img}?fm=webp&w=500`}
              alt="画像"
              style={{
                objectFit: "cover",
              }}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ProductImage;
