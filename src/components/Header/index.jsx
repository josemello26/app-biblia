import * as Style from './style';
import logoHeader from '../../assets/logo-biblia.svg';

export const Header = () => {
	return (
		<Style.HeaderContainer>
			<img
				src={logoHeader}
				alt="Logo da Bíblia Web"
				style={{ height: '48px', width: 'auto' }}
			/>
			<Style.Title>Bíblia Web</Style.Title>
		</Style.HeaderContainer>
	);
};