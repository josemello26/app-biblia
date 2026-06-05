import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 14px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;