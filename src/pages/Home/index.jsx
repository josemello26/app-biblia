import { useEffect, useState } from "react";
import { getLivros } from '../../data/dados';
import { CardLivro } from "../../components/CardLivro";
import * as Style from './style';

export const Home = ({ onSelecionarLivro }) => {
	const [livros, setLivros] = useState([]);
	const [carregando, setCarregando] = useState(true);

	useEffect(() => {
		const buscarDados = async () => {
			setCarregando(true);
			const dados = await getLivros();
			setLivros(dados);
			setCarregando(false);
		};

		buscarDados();
	}, []);

	if (carregando) {
		return <Style.Container>
			<p>Carregando livros...</p>
		</Style.Container>
	}

	return (
		<Style.Container>
			{livros.map((livro) => (
				<CardLivro
					key={livro.id}
					nome={livro.nome}
					capitulos={livro.capitulos_qtd}
					onClick={() => onSelecionarLivro(livro.id)}
				/>
			))}
		</Style.Container>	
	);
};
