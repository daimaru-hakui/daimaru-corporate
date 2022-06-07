/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import Drawer from "../drawer/Drawer";
// import Logo from 'src/assets/svg/Logo.svg';

const Header: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
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
    <header
      className={`${styles.container} w-full flex sticky top-0 bg-white z-50`}
    >
      <div className={`w-9/12 lg:w-3/12 flex items-center`}>
        <div className={`w-52 ml-6`}>
          <Link href={"/"}>
            <a>
              <img
                src="/logo.svg"
                width={"250px"}
                height={"50px"}
                alt={"大丸白衣"}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={`w-3/12 lg:w-9/12 flex items-center lg:mr-6`}>
        <div className={`w-full hidden lg:block`}>
          <ul className={`${styles.menuList} w-full flex justify-end`}>
            {items.map((item, index) => (
              <li className={`list-none text-sm`} key={index.toString()}>
                <Link href={item.link}>
                  <a className={`mx-6`}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Drawer openMenu={openMenu} />
      </div>
      <div
        className={`${styles.burgerBtn} block lg:hidden`}
        onClick={() => menuFunction()}
      >
        <div className={styles.burgerBtnInner}>
          <div className={styles.burgerBtnBody}>
            <span className={openMenu ? "" : styles.isAction}></span>
            <span className={openMenu ? "" : styles.isAction}></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
