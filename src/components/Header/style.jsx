import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: var(--bg-card);
	padding: 16px;
	border-bottom: 1px solid var(--border-cor);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	udth: 100;
	position: sticky;
	top: 0;
	z-index: 10;
`;

export const Title = styled.h1`
	font-size: 18px;
	font-weight: 600;
	color: var(--font-primaria);
	margin: 0;

	@media (min-width: 768px) {
		font-size: 22px;		
	}
`;
