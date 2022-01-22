import { Container } from "./styles"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export const Summary = () => {
	const { transactions } = useTransactions();

	const summary = transactions.reduce((acc, transaction) => {
		if (transaction.type === 'deposit') {
			acc.income += transaction.amount;
			acc.total += transaction.amount;
		} else {
			acc.outcome += transaction.amount;
			acc.total -= transaction.amount;
		}

		return acc;
	}, {
		income: 0,
		outcome: 0,
		total: 0
	})

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency', currency: 'BRL'
		}).format(value);
	}

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{formatCurrency(summary.income)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>

				<strong>
					{formatCurrency(summary.outcome)}
				</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>

				<strong>
					{formatCurrency(summary.total)}
				</strong>
			</div>
		</Container>
	)
}
