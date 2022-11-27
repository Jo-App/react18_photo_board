import React, { useContext } from 'react';
import styles from '../styles/Modal.module.css';
import Item from './Item';
import { ModalContext } from './../context/ModalContext'; 

export default function Modal() {
  const { modal, closeModal } = useContext(ModalContext);
  return (
    <>
      {
        modal && 
        <div className={`${styles.modalMask} ${modal ? styles.show : '' }`}>
          <div className={styles.modalContainer}>
            <div>
              <div className={styles.modalHeader}>
                <h4>photo</h4>
                <div 
                  className={styles.closeBtn}
                  onClick={()=>closeModal()}
                >X</div>
                {/* <Item key={item.id} item={item}></Item> */}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

