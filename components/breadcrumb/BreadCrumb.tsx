import { minHeight } from "@mui/system";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const BreadCrumb: NextPage<any> = ({ category, productCode, productName }) => {
  const categoryName = category.name;
  const categorySlug = category.slug;
  return (
    <div className="flex text-xs">
      <div className="mr-4">
        <Link href={"/"} passHref>
          ホーム
        </Link>
      </div>
      <div className="mr-4">{`>`}</div>
      <Link href={`/products/`} passHref>
        <div className="mr-4">商品一覧</div>
      </Link>
      {categoryName && (
        <>
          <div className="mr-4">{`>`}</div>
          <Link href={`/products/${categorySlug}`} passHref>
            <div className="mr-4">{categoryName}</div>
          </Link>
        </>
      )}
      <div className="mr-4">{`>`}</div>
      <div>
        <span className="mr-1">{productCode}</span>
        {productName}
      </div>
    </div>
  );
};

export default BreadCrumb;
