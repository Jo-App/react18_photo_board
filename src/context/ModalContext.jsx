import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);
  const openModal = (id) => {
    setModal(true);
    console.log(id)
  }
  const closeModal = () => {
    setModal(false);
  }
  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

