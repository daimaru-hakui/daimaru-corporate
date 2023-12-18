import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "./Drawer.module.scss";
import { Menus } from "../../deta";

interface Props {
  openMenu: boolean;
  menuFunction: any;
}

const Drawer: NextPage<Props> = ({ openMenu, menuFunction }) => {
  return (
    <div className={openMenu ? "" : styles.isAction}>
      <div
        className={`${styles.drawerWrapper} block w-full h-full bg-white lg:hidden`}
      >
        <ul className={`flex flex-col justify-center h-4/5`}>
          {Menus.map((menu, index) => (
            <li
              className={`px-3 py-6 text-center`}
              key={index.toString()}
              onClick={() => menuFunction()}
            >
              <Link href={menu.link} passHref>
                <div>{menu.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
