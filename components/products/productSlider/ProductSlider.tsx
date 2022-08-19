/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./ProductSlider.module.scss";

const ProductSlider: NextPage<any> = ({ item }) => {
  const [images, setImages] = useState<String[]>([]); //画像を配列として格納
  const [lensX, setLensX] = useState(0);
  const [lensY, setLensY] = useState(0);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const [display, setDisplay] = useState(false);

  const upImage = (e: any) => {
    setDisplay(true);
    // setLensX(e.clientX - e.currentTarget.getBoundingClientRect().left - 100);
    // setLensY(e.clientY - e.currentTarget.getBoundingClientRect().top - 100);
    setImageX((e.clientX - e.currentTarget.getBoundingClientRect().left) * -1);
    setImageY((e.clientY - e.currentTarget.getBoundingClientRect().top) * -1);
  };

  //画像を取得して配列に格納
  useEffect(() => {
    let arrayColor: string[] = [];
    for (let i = 0; i < item.imagesColor.length; i++) {
      if (item.imagesColor[i]) {
        arrayColor.push(item.imagesColor[i].image.url);
      }
    }

    let arrayDetail: string[] = [];
    for (let i = 0; i < item.imagesDetail.length; i++) {
      if (item.imagesDetail[i]) {
        arrayDetail.push(item.imagesDetail[i].image.url);
      }
    }

    setImages([...arrayColor, ...arrayDetail]);
  }, [item]);

  const settings = {
    customPaging: function (index: number) {
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
    <div className={`${styles.productSlider}`}>
      <Slider {...settings}>
        {images.map((img, index) => (
          // <img key={index} src={`${img}?fm=webp&w=900`} alt="画像" />
          <div key={index}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
              }}
              onMouseMove={(e) => upImage(e)}
              onMouseOut={() => setDisplay(false)}
            >
              <img src={`${img}?fm=webp?fit=crop&w=1000?h=1000`} alt="画像" />
              <img
                src={`${img}?fm=webp?fit=crop&w=1000?h=1000`}
                alt="画像"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: `${imageY}px`,
                  left: `${imageX}px`,
                  transform: "scale(2)",
                  transformOrigin: "top left",
                  transition: "opacity 0.2s",
                  opacity: display ? "1" : "0",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProductSlider;
