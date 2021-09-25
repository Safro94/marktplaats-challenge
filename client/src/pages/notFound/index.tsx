import { ReactComponent as NotFoundSvg } from '../../assets/404.svg';

import { HOME } from '../../constants/routes';

import {
	NotFoundContainer,
	NotFoundSvgContainer,
	NotFoundLink,
} from './index.styles';

const NotFound = () => {
	return (
		<NotFoundContainer className='not-found'>
			<NotFoundSvgContainer>
				<NotFoundSvg data-testid='icon' />
			</NotFoundSvgContainer>

			<NotFoundLink to={HOME}>Go back to the home page</NotFoundLink>
		</NotFoundContainer>
	);
};

export default NotFound;
