import React, { useState, useContext }  from 'react';
import styles from '../styles/List.module.css';
import Loading from './layout/Loading';
import Item from './Item';
import Paginations from './Paginations';
import { useQuery } from '@tanstack/react-query';
import { BoardApiContext, useBoardApi } from '../context/BoardApiContext';

export default function List() {
  const { isLoading, error, data } = useContext(BoardApiContext);

  return (
    <>
      <div className={styles.title}>
        <h3>photos</h3>
      </div>
      <div>
        { 
          isLoading &&
          <div className={styles.loading}>
            <Loading></Loading> 
          </div>
        }
        <div className={styles.wrapper}>
          <div className={styles.container}>
            { error && <p>{JSON.stringify(error.message)}</p> }
            {
              data && 
              data.map((item, index) => {
                return (<Item key={item.id} item={item}></Item>);
              })
            }
          </div>
        </div>
        { 
          <Paginations
            className={styles.paginations}
            totalCount={1000}
          ></Paginations>
        }
      </div>
    </>
  );
}
