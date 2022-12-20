import React, { useContext } from 'react';
import styles from '../styles/Modal.module.css';
import Item from './Item';
import { ModalContext } from './../context/ModalContext';
import { useQuery } from '@tanstack/react-query';
import { BoardApiContext, useBoardApi } from '../context/BoardApiContext';
import Loading from './layout/Loading';

export default function Modal() {
  const { modal, closeModal, id } = useContext(ModalContext);
  const { board } = useBoardApi();
  const {
    isLoading,
    error,
    data,
  } = useQuery(['photoDetail', id], () => board.getPhotoDetail(id));

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
              </div>
                { 
                  isLoading &&
                  <div className={styles.loading}>
                    <Loading></Loading> 
                  </div>
                }
                {
                  data &&
                  <Item key={Number(data.id)} item={data} wSize={800} useModal={true}></Item>
                }
            </div>
          </div>
        </div>
      }
    </>
  );
}

