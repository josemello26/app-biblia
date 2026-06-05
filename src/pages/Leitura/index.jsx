import { useEffect, useState } from "react";
import { getLivroPorId } from '../../data/dados';
import * as Style from './style';
import { IoArrowBack } from "react-icons/io5";

export const Leitura = ({ livroId, onVoltar }) => {
	const [livro, setLivro] = useState(null);
	const [carregando, setCarregando] = useState(true);
	const [capituloAtual, setCapituloAtual] = useState(1);

	useEffect(() => {
		const idLimpo = String(livroId).split(' ')[0];
		
		const carregarLivro = async () => {
			setCarregando(true);
			const dados = await getLivroPorId(idLimpo);
			if (dados) {
				setLivro(dados);				
			}
			setCarregando(false);			
		};

		carregarLivro();
	}, [livroId]);

	if (carregando) return <Style.Container><p>Carregando conteúdo...</p></Style.Container>;
	if (!livro) return <Style.Container><p>Livro não encontrado.</p></Style.Container>;

	const capituloExibido = livro.capitulos.find(c => c.numero === capituloAtual);

	return (
		<Style.Container>
			<Style.BotaoVoltar onClick={onVoltar}>
				<IoArrowBack size={20} />
				Voltar para a Home
			</Style.BotaoVoltar>
			<h1>{livro.nome}</h1>

			<Style.ContainerFiltro>
				<span>Capítulos</span>
				{livro.capitulos.map((cap) => (
					<Style.BotaoCapitulo
						key={	cap.numero}
						$ativo={capituloAtual === cap.numero}
						onClick={() => setCapituloAtual(cap.numero)}
					>
						{cap.numero}
					</Style.BotaoCapitulo>
				))}
			</Style.ContainerFiltro>

			{capituloExibido && (
				<Style.Capitulo>
					<h2>Capítulo {capituloExibido.numero}</h2>
					<p>{capituloExibido.texto}</p>
				</Style.Capitulo>
			)}
		</Style.Container>
	);
};
