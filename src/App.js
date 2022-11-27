import './App.css';
import List from './components/List';
import Modal from './components/Modal';
import { ModalProvider } from './context/ModalContext';

export default function App() {
  return (
    <>
      <ModalProvider>
        <List></List>
        <Modal></Modal>
      </ModalProvider>
    </>
  );
}