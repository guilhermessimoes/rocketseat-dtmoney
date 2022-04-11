import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransacitonModalOpen, setIsNewTransacitonModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransacitonModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransacitonModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal       
        isOpen={isNewTransacitonModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle  />

    </TransactionsProvider>
  );
}