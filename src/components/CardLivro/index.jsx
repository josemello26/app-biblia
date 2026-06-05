import * as Style from './style';
import { IoBookOutline } from 'react-icons/io5';

export const CardLivro = ({ nome, capitulos, onClick }) => (
	<Style.Card onClick={onClick}>
		<Style.IconWrapper>
			<IoBookOutline />
		</Style.IconWrapper>
		<Style.Info>
			<Style.Title>{nome}</Style.Title>
			<Style.Subtitle>{capitulos} Capítulos</Style.Subtitle>
		</Style.Info>
	</Style.Card>
);
