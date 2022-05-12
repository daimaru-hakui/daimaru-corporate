import React from 'react';
import styles from './Information.module.scss';

const Information = () => {
  const lists = [
    {
      id: 1,
      time: '2022.05.12',
      category: 'お知らせ',
      title:
        '【重要】オハヨー公式インスタグラムの「偽アカウント（なりすまし）」にご注意ください',
    },
    {
      id: 2,
      time: '2022.04.18',
      category: 'プレスリリース',
      title: 'アイスクリーム 価格改定のお知らせ',
    },
    {
      id: 3,
      time: '2022.03.29',
      category: 'プレスリリース',
      title: '「焼プリン」 発売30周年を記念し、特設Webサイトをオープン',
    },
  ];
  return (
    <>
      <div className={styles.infoWrapper}>
        <div className={styles.infoHeading}>
          <h3>お知らせ</h3>
        </div>
        <div className={styles.infoBody}>
          <ul className={styles.infoList}>
            {lists.map((list) => (
              <>
                <li className={styles.infoListItem} key={list.id}>
                  <time dateTime={list.time} className={styles.time}>
                    {list.time}
                    <i className={styles.cat}>{list.category}</i>
                  </time>
                  <p className={styles.title}>{list.title}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Information;
