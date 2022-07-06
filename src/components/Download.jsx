import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';

const Download = () => (
  <div className={`${styles.section} ${styles.bgWhite}`}>
    <div className={`${styles.subSection} flex-col text-center`}>
      <div>
        <h1 className={`${styles.h1Text} ${styles.blackText}`}>
          Download the Code
        </h1>
        <p className={`${styles.pText} ${styles.blackText}`}>
          Source Code is available on the GitHub.
        </p>
      </div>
      <button
        className={styles.btnPrimary}
        onClick={() =>
          window.open('https://github.com/halitos/rn-nft-ui', '_blank')
        }
      >
        Source Code
      </button>
      <div className={styles.flexCenter}>
        <img
          src={assets.scene}
          alt='download scene'
          className={styles.fullImg}
        />
      </div>
    </div>
  </div>
);
export default Download;
