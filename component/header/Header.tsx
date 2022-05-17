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
      name: "商品情報",
      link: "/product",
    },
    {
      name: "会社情報",
      link: "/company",
    },
    {
      name: "店舗情報",
      link: "/shop",
    },
    {
      name: "CSR",
      link: "/csr",
    },
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
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
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
      <div className={styles.headerRight}>
        <div className={styles.menuWrapper}>
          <ul className={styles.menuList}>
            {items.map((item, index) => (
              <li className={styles.menuListItem} key={index.toString()}>
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Drawer openMenu={openMenu} />
      </div>
      <div className={styles.burgerBtn} onClick={() => menuFunction()}>
        <div className={styles.burgerBtnInner}>
          <div className={styles.burgerBtnBody}>
            <span className={openMenu ? "" : styles.isAction}></span>
            <span className={openMenu ? "" : styles.isAction}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
