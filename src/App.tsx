import { useState } from "react"
import Modal from "react-modal"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from "./hooks/useTransactions"

Modal.setAppElement('#root');

export const App = () => {
	const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={() => setNewTransactionModalOpen(true)} />
			<Dashboard />

			<NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={() => setNewTransactionModalOpen(false)} />

			<GlobalStyle />
		</TransactionsProvider>
	)
}

