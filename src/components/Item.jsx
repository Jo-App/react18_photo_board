import React from 'react';
import styles from '../styles/Item.module.css';
import Loading from './layout/Loading';

export default function Item({item}) {
  return (
    <>
      <div
        //:class="{ loaded: imageLoad, hoverNone: useModal }"
        className={styles.item}
      >
        <img className='w-full' src={item.download_url}  />
        {/* <div className={styles.loadingBar}>
          <Loading></Loading>
        </div> */}
      </div>
    </>
  );
}

