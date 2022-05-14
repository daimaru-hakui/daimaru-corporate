import React, { useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { NextPage } from 'next';
// import Logo from 'src/assets/svg/Logo.svg';

const Header: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topbarLeft}>
        <div className={styles.logo}>
          <Image
            src='/logo.svg'
            width={'250px'}
            height={'50px'}
            alt={'大丸白衣'}
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.menuWrapper}>
          <ul className={styles.menuList}>
            <li className={styles.menuListItem}>
              <a href='#'>商品情報</a>
            </li>
            <li className={styles.menuListItem}>
              <a>会社情報</a>
            </li>
            <li className={styles.menuListItem}>
              <a>店舗情報</a>
            </li>
            <li className={styles.menuListItem}>
              <a>CSR</a>
            </li>
            <li className={styles.menuListItem}>
              <a>採用情報</a>
            </li>
            <li className={styles.menuListItem}>
              <a>お問い合わせ</a>
            </li>
          </ul>
        </div>
        <div className={openMenu ? '' : styles.isAction}>
          <div className={styles.drawerWrapper}>
            <ul className={styles.drawerList}>
              <li className={styles.drawerListItem}>
                <a href='#'>商品情報</a>
              </li>
              <li className={styles.drawerListItem}>
                <a>会社情報</a>
              </li>
              <li className={styles.drawerListItem}>
                <a>店舗情報</a>
              </li>
              <li className={styles.drawerListItem}>
                <a>CSR</a>
              </li>
              <li className={styles.drawerListItem}>
                <a>採用情報</a>
              </li>
              <li className={styles.drawerListItem}>
                <a>お問い合わせ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.burgerBtn} onClick={() => menuFunction()}>
        <div className={styles.burgerBtnInner}>
          <div className={styles.burgerBtnBody}>
            <span className={openMenu ? '' : styles.isAction}></span>
            <span className={openMenu ? '' : styles.isAction}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
