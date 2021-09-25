import error from '../../assets/error.png';

import {
	ErrorContainer,
	ErrorGoBackTextContainer,
	ErrorImage,
	ErrorText,
} from './index.styles';

interface IErrorProps {
	resetErrorBoundary: () => void;
}

const Error = ({ resetErrorBoundary }: IErrorProps) => {
	return (
		<ErrorContainer role='alert'>
			<ErrorImage src={error} alt='Error' />
			<ErrorText>
				Ooops, there's been an error, please try again in a few minutes
				<ErrorGoBackTextContainer onClick={resetErrorBoundary}>
					Go back to the home page
				</ErrorGoBackTextContainer>
			</ErrorText>
		</ErrorContainer>
	);
};

export default Error;
