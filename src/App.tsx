import React, {useState} from "react";

import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard/index";
import { TransactionTable } from "./components/TransactionTable/index";
import { NewTransactionModal } from "./components/NewTransactionModal/index";


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
    <>
      <Header  onHandeOpenNewTransactionModal={HandeOpenNewTransactionModal}/>
      <Dashboard />
      <TransactionTable />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={HandeCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}

export default App;
