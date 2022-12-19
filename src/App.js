import './App.css';
import List from './components/List';
import Modal from './components/Modal';
import { ModalProvider } from './context/ModalContext';
import { BoardApiProvier } from './context/BoardApiContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <BoardApiProvier>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <List></List>
            <Modal></Modal>
          </ModalProvider>
        </QueryClientProvider>
      </BoardApiProvier>
    </>
  );
}