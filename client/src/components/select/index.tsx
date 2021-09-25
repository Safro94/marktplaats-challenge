import { useSelect } from 'downshift';

import Form from '../form';

import { ISelectOption } from '../../types';

import {
	SelectContainer,
	StyledSelect,
	StyledList,
	StyledListItem,
	LabelContainer,
	ChevronDownWrapper,
	ChevronDown,
} from './index.styles';

export interface ISelectProps {
	id: string;
	disabled?: boolean;
	onChange: (selectedOption: ISelectOption) => void;
	options: ISelectOption[];
	value?: ISelectOption | undefined;
	labelText: string;
	placeholderText?: string;
}

const Select = ({
	disabled = false,
	onChange,
	options,
	value,
	placeholderText,
	id,
	labelText,
}: ISelectProps) => {
	const {
		isOpen,
		selectedItem,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		highlightedIndex,
		getItemProps,
	} = useSelect<ISelectOption>({
		items: options,
		selectedItem: value,
		initialHighlightedIndex:
			value && options.findIndex(item => item.value === value?.value),
		onSelectedItemChange: changes => {
			onChange(changes.selectedItem as ISelectOption);
		},
	});

	return (
		<>
			<LabelContainer>
				<Form.Label extraLabelProps={{ ...getLabelProps({ htmlFor: id }) }}>
					{labelText}
				</Form.Label>
			</LabelContainer>

			<SelectContainer>
				<ChevronDownWrapper isOpen={isOpen}>
					<ChevronDown />
				</ChevronDownWrapper>

				<StyledSelect
					type='button'
					selectedItem={selectedItem}
					disabled={disabled}
					data-testid='toggle-button'
					{...getToggleButtonProps({ disabled, id })}
				>
					{selectedItem?.label || placeholderText}
				</StyledSelect>

				<StyledList isOpen={isOpen} {...getMenuProps()}>
					{isOpen &&
						options.map((item, index) => (
							<StyledListItem
								key={item.value}
								isHighlighted={highlightedIndex === index}
								{...getItemProps({ item, index })}
							>
								{item.label}
							</StyledListItem>
						))}
				</StyledList>
			</SelectContainer>
		</>
	);
};

export default Select;
