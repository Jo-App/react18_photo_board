import React, { useState }  from 'react';
import styles from '../styles/List.module.css';
import Loading from './layout/Loading';
import { useQuery } from '@tanstack/react-query';
import Item from './Item';
import Paginations from './Paginations';
import { useBoardApi } from '../context/BoardApiContext';

export default function List() {
  //const [ resultList, setResultList ] = useState(dataSet);
  const { board } = useBoardApi();
  const {
    isLoading,
    error,
    data,
  } = useQuery(['board', 1], () => board.getPhotoList());

  return (
    <>
      <div className={styles.title}>
        <h3>photos</h3>
        {/* <h3>photos {{ isLoading }}</h3> */}
      </div>
      {/* { 
        isError && 
        <div className={styles.center}>
          <h2 style='text-align: center'>Error !! { resultList }</h2>
        </div>
      }
      {
        isLoading &&
        <div className={styles.center}><Loading></Loading></div>
      } */}
      <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {
              data && 
              data.map((item, index) => {
                return (<Item key={item.id} item={item}></Item>);
              })
            }
          </div>
        </div>
        {/* <Paginations
          className={styles.paginations}
          :totalCount='1000'
          @getPhotoList='getPhotoList'
          ref='childPaginations'
        ></Paginations> */}
        <Paginations
          className={styles.paginations}
          totalCount={1000}
        ></Paginations>
      </div>
    </>
  );
}

const dataSet = [{'id':'10','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/6J--NXulQCs','download_url':'https://picsum.photos/id/10/2500/1667'},{'id':'11','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/Cm7oKel-X2Q','download_url':'https://picsum.photos/id/11/2500/1667'},{'id':'12','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/I_9ILwtsl_k','download_url':'https://picsum.photos/id/12/2500/1667'},{'id':'13','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/3MtiSMdnoCo','download_url':'https://picsum.photos/id/13/2500/1667'},{'id':'14','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/IQ1kOQTJrOQ','download_url':'https://picsum.photos/id/14/2500/1667'},{'id':'15','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/NYDo21ssGao','download_url':'https://picsum.photos/id/15/2500/1667'},{'id':'16','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/gkT4FfgHO5o','download_url':'https://picsum.photos/id/16/2500/1667'},{'id':'17','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/Ven2CV8IJ5A','download_url':'https://picsum.photos/id/17/2500/1667'},{'id':'18','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/Ps2n0rShqaM','download_url':'https://picsum.photos/id/18/2500/1667'},{'id':'19','author':'Paul Jarvis','width':2500,'height':1667,'url':'https://unsplash.com/photos/P7Lh0usGcuk','download_url':'https://picsum.photos/id/19/2500/1667'}]