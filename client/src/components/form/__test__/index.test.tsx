import { render, screen } from '../../../utils/test-utils';

import Form from '..';

import { ISelectOption } from '../../../types';
import { ISelectProps } from '../../select';

jest.mock('../../select', () => ({ labelText, options }: ISelectProps) => (
	<div>
		<label>{labelText}</label>
		<select>
			{options.map((option: ISelectOption) => (
				<option key={option.value}>{option.label}</option>
			))}
		</select>
	</div>
));

describe('Form', () => {
	const onClick = jest.fn();

	it('should render a title, a label, an input, a dropdown and a button', () => {
		render(
			<Form rows={3}>
				<Form.Title>Title</Form.Title>
				<Form.Label>Label</Form.Label>
				<Form.Input
					placeholder='Enter address'
					value='abc'
					onChange={() => {}}
				/>
				<Form.Dropdown
					labelText='Brand:'
					options={[{ label: 'ferrari', value: '1' }]}
					onChange={() => {}}
					placeholderText='Select a brand'
					id='S1'
				/>
				<Form.Submit onClick={onClick} disabled>
					Add
				</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/title/i)).toBeInTheDocument();
		expect(screen.getByText(/label/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/enter address/i)).toBeInTheDocument();
		expect(screen.getByText(/brand:/i)).toBeInTheDocument();
		expect(
			screen.getByRole('option', { name: /ferrari/i })
		).toBeInTheDocument();
		expect(screen.getByText(/add/i)).toBeDisabled();
	});

	it('should have a button not disabled', () => {
		render(
			<Form rows={3}>
				<Form.Submit onClick={onClick}>Add</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/add/i)).not.toBeDisabled();
	});
});
