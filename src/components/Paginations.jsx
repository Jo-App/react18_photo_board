import React, { useEffect, useState } from 'react';
import styles from '../styles/Page.module.css';
import { useImmer } from 'use-immer';

export default function Paginations({totalCount}) {
  const [pageList, setPageList] = useImmer([]);
  const [totalPage, setTotalPage] = useState(0);
  const [pageGroupCount, setPageGroupCount] = useState(10);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(0);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);
  const [start, setStart] = useState(0);

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

  }
  const nextPage = () => {

  }

  useEffect(() => {
    movePage(1);
  },[]);

  return (
    <ul>
      {
        prev > 0 &&
        <li onClick={()=>prePage()}>
          <span>〈</span>
        </li>
      }
      { 
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

