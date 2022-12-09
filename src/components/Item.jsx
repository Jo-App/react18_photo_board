import React, { useState, useRef, useContext, useEffect } from 'react';
import styles from '../styles/Item.module.css';
import ImageLoading from './layout/ImageLoading';
import { ModalContext } from './../context/ModalContext';

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef()

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad()
    }
  })

  return [ref, loaded, onLoad]
}

export default function Item({item}) {
  const { openModal } = useContext(ModalContext);
  const [ ref, loaded, onLoad ] = useImageLoaded();
  return (
    <>
      <div
        className={ `${styles.item} ${loaded ? styles.loaded : ''}` }
        onClick={()=>openModal(item.id)}
      >
        <img className={styles.itemImg} ref={ref} onLoad={onLoad} src={item.download_url}  />
        { 
          !loaded &&
          <div className={styles.loadingBar}>
            <ImageLoading></ImageLoading>
          </div>
        }
      </div>
    </>
  );
}

