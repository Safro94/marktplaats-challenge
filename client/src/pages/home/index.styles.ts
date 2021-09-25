import styled from 'styled-components';

export const Wrapper = styled.div(
	({ theme }) => `
	@media ${theme.breakpoints.tablet} {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
);
