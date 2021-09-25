import styled from 'styled-components';

export const FormContainer = styled.div(
	({ theme }) => `
	margin: auto;

	@media ${theme.breakpoints.tablet} {
		width: 25%;
	}
`
);

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
