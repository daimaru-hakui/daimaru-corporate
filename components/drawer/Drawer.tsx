import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "./Drawer.module.scss";
import { Menus } from "../../deta";

interface Props {
  openMenu: boolean;
}

const Drawer: NextPage<Props> = ({ openMenu }) => {
  return (
    <div className={openMenu ? "" : styles.isAction}>
      <div
        className={`${styles.drawerWrapper} block w-full h-full bg-white lg:hidden`}
      >
        <ul className={`flex flex-col justify-center h-4/5`}>
          {Menus.map((menu, index) => (
            <li className={`px-3 py-6 text-center`} key={index.toString()}>
              <Link href={menu.link}>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
