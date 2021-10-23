import React, {useState} from "react";

import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard/index";
import { TransactionTable } from "./components/TransactionTable/index";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { TransactionsProvider } from "./TransactionsContext"


import { GlobalStyle } from "./styles/globals";

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function HandeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function HandeCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header  onHandeOpenNewTransactionModal={HandeOpenNewTransactionModal}/>
      <Dashboard />
      <TransactionTable />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={HandeCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
