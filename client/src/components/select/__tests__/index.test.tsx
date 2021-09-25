import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../utils/test-utils';

import Select from '../';

import { ISelectOption } from '../../../types';
import { theme } from '../../../theme';

describe('Select', () => {
	let options: ISelectOption[];

	beforeEach(() => {
		options = [
			{ label: 'option1', value: 'option1' },
			{ label: 'option2', value: 'option2' },
			{ label: 'option3', value: 'option3' },
		];
	});

	it('should show 3 options when the button is clicked and return the object reference when an item gets selected', () => {
		let selected: ISelectOption | null = null;

		render(
			<Select
				labelText='My label'
				id='my-select'
				onChange={selectedValue => {
					selected = selectedValue;
				}}
				options={options}
			/>
		);

		const selectElement = screen.getByTestId('toggle-button');

		expect(screen.queryAllByRole('option')).toHaveLength(0);
		userEvent.click(selectElement);

		expect(screen.getAllByRole('option')).toHaveLength(3);

		const selectedOption = screen.getByRole('option', { name: /option2/i });
		userEvent.click(selectedOption);

		expect(selectElement).toHaveTextContent(options[1].value);
		expect(selected).toEqual(options[1]);
	});

	it('should highlight the items as you hover them', () => {
		render(
			<Select
				labelText='My label'
				id='my-select'
				onChange={() => null}
				options={options}
			/>
		);

		const selectElement = screen.getByTestId('toggle-button');
		userEvent.click(selectElement);

		const selectedOption = screen.getByRole('option', { name: /option2/i });

		expect(selectedOption).toHaveStyle({
			color: theme.palette.primary.text,
		});

		userEvent.hover(selectedOption);

		expect(selectedOption).toHaveStyle({
			backgroundColor: theme.palette.primary.text,
			color: theme.palette.primary.main,
		});
	});

	it('should not show options when the select is disabled', () => {
		render(
			<Select
				disabled
				labelText='My label'
				id='my-select'
				onChange={() => null}
				options={options}
			/>
		);

		const selectElement = screen.getByTestId('toggle-button');
		expect(screen.queryAllByRole('option')).toHaveLength(0);
		userEvent.click(selectElement);

		expect(screen.queryAllByRole('option')).toHaveLength(0);
	});
});
