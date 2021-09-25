import styled from 'styled-components';

export const FormContainer = styled.form<{ rows: number }>(
	({ theme, rows }) => `
	display: grid;
	grid-template-rows: ${rows}fr;
	border: 1px solid ${theme.palette.primary.main};
	background: ${theme.palette.common.white};
`
);

export const FormElementsContainer = styled.div(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid ${theme.palette.primary.main};
	padding: 1rem;
	gap: 20px;
`
);

export const FormTitle = styled.h2(
	({ theme }) => `
	color: ${theme.palette.primary.text};
	font-weight: bold;
	font-size: 1.2rem;
`
);

export const FormLabel = styled.label`
	font-weight: bold;
`;

export const FormInput = styled.input`
	width: 100%;
	padding: 10px;
	font-size: 1em;
	border: 1px solid black;
	border-radius: 6px;
`;
