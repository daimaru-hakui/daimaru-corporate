import { NextPage } from 'next';
import React from 'react';
import styles from './PageTitle.module.scss';

interface Props {
  titleH1: string;
  titleH2: string;
}

const PageTitle: NextPage<Props> = ({ titleH1, titleH2 }) => {
  return (
    <div>
      <div className={styles.pageTitleHeading}>
        <h1 className={styles.pageTitleH1}>{titleH1}</h1>
        <h2 className={styles.pageTitleH2}>{titleH2}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
