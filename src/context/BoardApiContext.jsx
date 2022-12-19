import { createContext, useContext, useState } from 'react';
import Board from '../api/board';
import BoardClient from '../api/boardClient';

export const BoardApiContext = createContext();
const client = new BoardClient();
const board = new Board(client);

export function BoardApiProvier({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  return (
    <BoardApiContext.Provider value={{ board, isLoading, setIsLoading, error, setError, data, setData, limit, setLimit }}>
      {children}
    </BoardApiContext.Provider>
  );
}

export function useBoardApi() {
  return useContext(BoardApiContext);
}