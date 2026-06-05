import styled from "styled-components";

export const Card = styled.button`
	background: var(--bg-card);
	border-radius: 16px;
	padding: 20px;
	border: 1px solid var(--border-cor);
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16px;
	transition: all 0.3s ease;
	text-align: left;
	width: 100%;
	max-width: 320px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0, 05);

	&:hover {
		border-color: var(--color-principal);
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(130, 147, 246, 0.2);
	}
`;

export const IconWrapper = styled.div`
	background: var(--bg-icon);
	color: var(--color-principal);
	padding: 12px;
	border-radius: 12px;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;

export const Title = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: var(--font-primaria);
	margin: 0;
`;

export const Subtitle = styled.p`
	font-size: 14px;
	color: var(--font-secundaria);
	margin: 0;
`;