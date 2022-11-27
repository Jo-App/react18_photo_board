import React, { useContext } from 'react';
import styles from '../styles/Item.module.css';
import Loading from './layout/Loading';
import { ModalContext } from './../context/ModalContext'; 

export default function Item({item}) {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <div
        //:class="{ loaded: imageLoad, hoverNone: useModal }"
        className={styles.item}
        onClick={()=>openModal(item.id)}
      >
        <img className='w-full' src={item.download_url}  />
        {/* <div className={styles.loadingBar}>
          <Loading></Loading>
        </div> */}
      </div>
    </>
  );
}

