import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const BreadCrumb: NextPage<any> = ({ category, productCode, productName }) => {
  const categoryName = category.name;
  const categorySlug = category.slug;
  return (
    <div className='flex text-xs'>
      <div className='mr-4'>
        <Link href={'/'}>
          <a>ホーム</a>
        </Link>
      </div>
      <div className='mr-4'>{`>`}</div>
      <div>
        <Link href={`/products/${categorySlug}`}>
          <a>{categoryName}</a>
        </Link>
      </div>
      <div className='mr-4'>{`>`}</div>
      <div>
        <span className='mr-1'>{productCode}</span>
        {productName}
      </div>
    </div>
  );
};

export default BreadCrumb;
