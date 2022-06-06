import React from 'react';
import styles from './Handling.module.scss';

const Handling = () => {
  const items = [
    {
      title: 'ホテル・飲食・サービス',
      lists: [
        'シェフコート',
        '調理白衣',
        'スラックス',
        'ホール/調理用シューズなど',
      ],
    },
    {
      title: 'オフィスユニフォーム',
      lists: [
        'ジャケット',
        'スモッグ',
        'ベスト',
        'オーバーブラウス',
        'スカート',
        'パンツ',
        'ブラウス',
      ],
    },
    {
      title: '衛生ユニフォーム',
      lists: ['HACCP対応ユニフォーム', '衛生白衣', '衛生頭巾・帽子など'],
    },

    {
      title: 'メディカルユニフォーム',
      lists: [
        '医療用白衣',
        'スクラブ',
        'スラックス',
        '予防衣',
        'ラボコート',
        '介護・ケア',
        '検診衣',
        '入院着',
        'オペ着',
        '患者衣',
      ],
    },

    {
      title: 'イベント向け　プリント製品',
      lists: [
        'Tシャツ',
        'ポロシャツ',
        'スウェット',
        'ブルゾン',
        'キャップ',
        'エコバッグ',
      ],
    },
    {
      title: 'お祭り・法被など',
      lists: ['法被', 'その他'],
    },
    {
      title: 'ワーキングユニフォーム',
      lists: [],
    },
    {
      title: 'エステユニフォーム',
      lists: [],
    },
  ];
  return (
    <div className={styles.handlingArea}>
      {items.map((item, index) => (
        <div className={styles.handlingBox} key={index}>
          <h3 className={styles.handlingTitle}>{item.title}</h3>
          <ul>
            {item.lists.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Handling;
