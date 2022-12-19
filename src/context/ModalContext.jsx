import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0);
  const openModal = (id) => {
    setModal(true);
    setId(Number(id));
  }
  const closeModal = () => {
    setModal(false);
  }
  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal, id }}>
      {children}
    </ModalContext.Provider>
  );
}

