import styled from 'styled-components';

import { ISelectOption } from '../../types';

import { ReactComponent as IconChevronDown } from '../../assets/chevron-down.svg';

export const SelectContainer = styled.div`
	position: relative;
`;

export const ChevronDownWrapper = styled.div<{ isOpen?: boolean }>(
	({ isOpen }) => `
		${
			isOpen &&
			`
        svg {
          transform: rotate(180deg);
        }
      `
		};
	`
);

export const ChevronDown = styled(IconChevronDown)(
	({ theme }) => `
		margin: 0.875rem;
		margin-left: 0.5rem;
		pointer-events: none;
		position: absolute;
		right: 0;
		color: ${theme.palette.primary.text};
		font-size: 1rem;
		transition: transform 0.3s;
    max-width: 12px;
	`
);

export const StyledSelect = styled.button<{
	disabled?: boolean;
	selectedItem: ISelectOption;
}>(
	({ theme, selectedItem, disabled }) => `
		width: 100%;
    background: transparent;
		min-height: 40px;
		color: ${selectedItem ? 'initial' : theme.palette.primary.text};
    border: 1px solid ${theme.palette.primary.main};
    border-radius: 6px;
    padding: 0.5rem;
    text-align: left;

    ${
			disabled &&
			`
        opacity: 0.2;
      `
		}
	`
);

export const StyledList = styled.ul<{
	isOpen?: boolean;
}>(
	({ theme, isOpen }) => `
		border-radius: 4px;
		border: solid 1px ${theme.palette.primary.main};
		max-height: 270px;
		overflow-y: auto;
		display: ${!isOpen ? 'none' : 'block'};
    position: absolute;
    z-index: 10;
    background: white;
    width: 100%;
	`
);

export const StyledListItem = styled.li<{ isHighlighted: boolean }>(
	({ theme, isHighlighted }) => `
		padding: 10px 24px 6px;
		font-size: 1rem;
		cursor: pointer;
		color: ${theme.palette.primary.text};

		${
			isHighlighted &&
			`
        background-color: ${theme.palette.primary.text};
        color: ${theme.palette.primary.main};
      `
		}

		&:hover {
			background-color: ${theme.palette.primary.text};
			color: ${theme.palette.primary.main};
		}
	`
);

export const LabelContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px;
`;
