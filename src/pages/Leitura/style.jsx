import styled from "styled-components";

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 40px 20px;
	line-height: 1.6;
	color: var(--font-body);

	h1 {
		font-size: 2.5rem;
		margin-bottom: 30px;
		color: var(--font-primaria);
	}

	button {
		margin-bottom: 20px;
		cursor: pointer;
		padding: 8px 16px;
	}
`;

export const ContainerFiltro = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 15px;
	border: 1px solid var(--border-light);
	border-radius: 8px;
	margin-bottom: 30px;
	background: var(--bg-light);
`;

export const BotaoCapitulo = styled.button`
	background: ${props => props.$ativo ? 'var(--color-principal)' : 'transparent'};
	color: ${props => props.$ativo ? 'white' : 'var(--font-body)'};
	border: none;
	border-radius: 50%;
	width: 35px;
	height: 35px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	transition: all 0.2s;

	&:hover {
		background: ${props => props.$ativo ? 'var(--color-principal-hover)' : '#eee'};
	}
`;

export const Capitulo = styled.section`
	margin-bottom: 40px;
	padding: 20px;
	background: var(--bg-card);
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

	h2 {
		color: var(--color-principal);
		font-size: 1.5rem;
	}

	p {
		font-size: 1.1rem;
		text-align: justify;
	}
`;

export const BotaoVoltar = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	background: transparent;
	border: 1px solid var(--border-cor);
	padding: 8px 16px;
	border-radius: 8px;
	cursor: pointer;
	font-wight: 600;
	color: var(--font-secundaria);
	transition: all 0.2s;

	&:hover {
		background: var(--bg-light);
		color: var(--font-primaria);
		border-color: var(--border-cor);
	}
`;
