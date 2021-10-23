import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';



interface Transaction {
    id: number;
    title: string;
    price: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionInputProps{
    title: string;
    price: number;
    type: string;
    category: string;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

interface TransactionProviderProps{
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);
  

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
      api.get<any>('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);


    async function createTransaction(transactionInput: TransactionInputProps | any){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
          });
         const { transaction } = response.data;

         setTransactions([
             ...transactions, transaction
         ]);
    }  

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}