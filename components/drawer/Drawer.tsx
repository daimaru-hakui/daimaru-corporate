import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "./Drawer.module.scss";

interface Props {
  openMenu: boolean;
}

const Drawer: NextPage<Props> = ({ openMenu }) => {
  const items = [
    {
      name: "Serenade",
      link: "/serenade",
    },
    {
      name: "商品情報",
      link: "/product",
    },
    {
      name: "会社情報",
      link: "/company",
    },
    // {
    //   name: '店舗情報',
    //   link: '/shop',
    // },
    // {
    //   name: 'CSR',
    //   link: '/csr',
    // },
    {
      name: "採用情報",
      link: "/recruit",
    },
    {
      name: "お問い合わせ",
      link: "/contact",
    },
  ];
  return (
    <div className={openMenu ? "" : styles.isAction}>
      <div
        className={`${styles.drawerWrapper} block w-full h-full bg-white lg:hidden`}
      >
        <ul className={`flex flex-col justify-center h-4/5`}>
          {items.map((item, index) => (
            <li className={`px-3 py-6 text-center`} key={index.toString()}>
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
