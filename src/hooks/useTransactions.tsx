import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
	id: number,
	title: string,
	amount: number,
	type: string;
	category: string;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
	children: React.ReactNode;
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("http://localhost:3000/api/transactions")
			.then(res => setTransactions(res.data.transactions));
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('/transactions', {
			...transactionInput,
			createdAt: new Date()
		});

		const { transaction } = response.data;

		setTransactions([...transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider
			value={{
				transactions,
				createTransaction
			}}
		>
			{children}
		</TransactionsContext.Provider>
	);
}

export const useTransactions = () => {
	const context = useContext(TransactionsContext);

	if (!context) {
		throw new Error("useTransactions must be used within a TransactionsProvider");
	}

	return context;
}
