import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div className={`${styles.descDiv} fadeLeftMini`}>
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? 'fadeRightMini' : 'fadeLeftMini'
            }
            ${reverse ? styles.textRight : styles.textLeft}
            ${reverse ? styles.blackText : styles.whiteText}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button assetUrl={assets.expo} link={'deployed nft marketplace'} />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt='mockup'
            className={`${styles.sectionImg} ${
              reverse ? 'fadeRightMini' : 'fadeLeftMini'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
