import { createContext, useContext, useState } from 'react';
import Board from '../api/board';
import BoardClient from '../api/boardClient';

export const BoardApiContext = createContext();
const client = new BoardClient();
const board = new Board(client);

export function BoardApiProvier({ children }) {
  const [resultList, setResultList] = useState([]);

  return (
    <BoardApiContext.Provider value={{ board }}>
      {children}
    </BoardApiContext.Provider>
  );
}

export function useBoardApi() {
  return useContext(BoardApiContext);
}