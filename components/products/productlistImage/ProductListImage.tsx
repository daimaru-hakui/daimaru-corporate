import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  product: {
    id: string;
    productCode: string;
    productNumber: string;
    productName: string;
    colors: {
      id: string;
      colorNumber: string;
      colorName: string;
    }[];
    price: number;
    imagesColor: {
      image: {
        url: string;
      };
    }[];
  };
};

const ProductListImage: NextPage<Props> = ({ product }) => {
  const [colorChange, setColorChange] = useState(0);
  const onColorChange = (e: any) => {
    setColorChange(e.target.dataset.num);
  };
  return (
    <div key={product.id} className='mt-6'>
      <div className='w-full'>
        {product.imagesColor && (
          <Link href={`/products/${product.id}`}>
            <a className='flex justify-center'>
              {product.imagesColor.map(
                (image, index) =>
                  index == colorChange && (
                    <img
                      src={`${image.image.url}?w=600&h=600`}
                      className='base:h-full sm:h-64 object-cover'
                    />
                  )
              )}
              {/* <img
                src={`${product.imagesColor[0].image.url}?w=600&h=600`}
                className="base:h-full sm:h-64 object-cover"
              /> */}
            </a>
          </Link>
        )}
      </div>
      <div className='flex justify-center mt-2'>
        {product.colors.map((color, index) => (
          <span
            key={color.id}
            data-num={index}
            onClick={(e: any) => onColorChange(e)}
            className={`cursor-pointer mx-1 color color-${color.colorNumber}`}
          ></span>
        ))}
      </div>
      <div className='mt-2 text-xs text-center'>
        {product.productNumber} {product.productName}
      </div>
      {/* <div className="mt-1 text-xs">
                    価格 ￥{product.price} + 税
                  </div> */}
    </div>
  );
};

export default ProductListImage;
