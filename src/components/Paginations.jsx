import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import styles from '../styles/Page.module.css';
import { useImmer } from 'use-immer';
import { useQuery } from '@tanstack/react-query';
import { BoardApiContext, useBoardApi } from '../context/BoardApiContext';

export default function Paginations({totalCount}) {
  const { setIsLoading, setError, setData, limit } = useContext(BoardApiContext);
  const [pageList, setPageList] = useImmer([]);
  const [totalPage, setTotalPage] = useState(0);
  const [pageGroupCount, setPageGroupCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(0);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);

  const { board } = useBoardApi();
  const {
    isLoading,
    error,
    data,
  } = useQuery(['board', currentPage, limit], () => board.getPhotoList(currentPage ,limit), { keepPreviousData : true });

  useEffect(() => {
    movePage(currentPage);
  },[totalPage, currentPage, last, first])

  useEffect(() => {
    setIsLoading(isLoading);
    setError(error);
    setData(data);
  },[isLoading, error, data]);

  // useEffect(() => {
  //   setPageList([]);
  //   movePage(currentPage);
  //   setIsLoading(isLoading);
  //   setError(error);
  //   setData(data);
  // }, [limit])

  const movePage = (page) => {
    renderPagination(totalCount, page);
  }

  const renderPagination = (totalCount, cPage) => {
    if (totalCount <= pageGroupCount) return;
    setTotalPage(Math.ceil(totalCount / limit));
    let pageGroup = Math.ceil(currentPage / pageGroupCount);
    setCurrentPage(cPage);
    setLast(pageGroup * pageGroupCount);
    if (last > totalPage) last = totalPage;
    setFirst(last - (pageGroupCount - 1) <= 0 ? 1 : last - (pageGroupCount - 1));
    setNext(last + 1);
    setPrev(first - 1);
    setPageList([]);
    for (let index = first; index <= last; index++) {
      setPageList((totalPage) => {
        totalPage.push(index);
      });
    }
  }

  const prePage = () => {
    setFirst(first - pageGroupCount);
    if (first < 0) first = 1;
    renderPagination(totalCount, first - pageGroupCount);
  }
  const nextPage = () => {
    setLast(last + 1);
    renderPagination(totalCount, last+1);
  }

  return (
    <ul>
      {limit}
      {
        prev > 0 &&
        <li onClick={()=>prePage()}>
          <span>〈</span>
        </li>
      }
      { 
        pageList &&
        pageList.map((page, index) => {
          return (
            <li
              key={index}
              className={`${page === currentPage ? styles.active : ''}`}
              onClick={()=>movePage(page)}
            >
              <span>{page}</span>
            </li>
          )
        })
      }
      {
        last < totalPage &&
        <li onClick={()=>nextPage()}>
          <span>〉</span>
        </li>
      }
    </ul>
  );
}

