import { Container } from "./styles"

export const TransactionsTable = () => {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Aluguel</td>
						<td className="value withdraw">R$222</td>
						<td>Cat</td>
						<td>20/02/2022</td>
					</tr>
					<tr>
						<td>Top</td>
						<td className="value deposit">R$12</td>
						<td>Cat</td>
						<td>20/02/2022</td>
					</tr>
					<tr>
						<td>Top</td>
						<td className="value">R$12</td>
						<td>Cat</td>
						<td>20/02/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}