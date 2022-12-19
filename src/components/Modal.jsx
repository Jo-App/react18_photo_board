import React, { useContext } from 'react';
import styles from '../styles/Modal.module.css';
import Item from './Item';
import { ModalContext } from './../context/ModalContext';
import { useQuery } from '@tanstack/react-query';
import { BoardApiContext, useBoardApi } from '../context/BoardApiContext';

export default function Modal() {
  const { modal, closeModal, id } = useContext(ModalContext);
  const { board } = useBoardApi();
  const {
    isLoading,
    error,
    data,
  } = useQuery(['photoDetail', id], () => board.getPhotoDetail(id));

  console.log(data)
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
                {/* <div style={{width:'500px', height:'500px'}}></div> */}
                {
                  data &&
                  <Item key={Number(data.id)} item={data}></Item>
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

