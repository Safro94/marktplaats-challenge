import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../utils/test-utils';

import CarFormContainer from '../';

import BrandService from '../../../services/brandService';
import ModelService from '../../../services/modelService';

jest.mock('../../../services/brandService', () => {
	return {
		getBrands: jest.fn(),
	};
});

jest.mock('../../../services/modelService', () => {
	return {
		getModelByBrandId: jest.fn(),
	};
});

const mockHandleError = jest.fn();
jest.mock('react-error-boundary', () => ({
	...jest.requireActual('react-error-boundary'),
	useErrorHandler: () => mockHandleError,
}));

describe('CarFormContainer', () => {
	const brandId = 1;
	let origErrorConsole: {
		(...data: any[]): void;
		(message?: any, ...optionalParams: any[]): void;
		(...data: any[]): void;
		(message?: any, ...optionalParams: any[]): void;
	};

	beforeEach(() => {
		(BrandService.getBrands as jest.Mock).mockResolvedValue([
			{ name: 'ferrari', id: 1 },
		]);

		(ModelService.getModelByBrandId as jest.Mock).mockResolvedValue([
			{ name: 'F8', id: 1 },
			{ name: '458 spider', id: 2 },
		]);

		origErrorConsole = window.console.error;

		window.console.error = (...args) => {
			const firstArg = args.length > 0 && args[0];

			const shouldBeIgnored =
				firstArg &&
				typeof firstArg === 'string' &&
				firstArg.includes('Not implemented: HTMLFormElement.prototype.submit');

			if (!shouldBeIgnored) {
				origErrorConsole(...args);
			}
		};
	});

	afterEach(() => {
		window.console.error = origErrorConsole;
	});

	it('should render correctly', async () => {
		const { container } = render(<CarFormContainer />);

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should show a disabled button', async () => {
		render(<CarFormContainer />);

		await waitFor(() => {
			expect(
				screen.getByRole('button', { name: /search car/i })
			).toBeDisabled();
		});
	});

	it('should enable the button when keywords is not empty', async () => {
		render(<CarFormContainer />);

		const searchButton = screen.getByRole('button', {
			name: /search car/i,
		});
		expect(searchButton).toBeDisabled();

		const keywordsInput = screen.getByPlaceholderText(/keywords/i);
		userEvent.type(keywordsInput, 'a');

		await waitFor(() => {
			expect(searchButton).not.toBeDisabled();
		});
	});

	it('should fill the models select once the brand is selected and call the services', async () => {
		render(<CarFormContainer />);

		const searchButton = screen.getByRole('button', { name: /search car/i });
		expect(searchButton).toBeDisabled();

		await waitFor(() => {
			expect(BrandService.getBrands).toHaveBeenCalledTimes(1);
			expect(BrandService.getBrands).toHaveBeenCalledWith(mockHandleError);
		});

		const brandSelectButton = screen.getAllByTestId('toggle-button')[0];
		userEvent.click(brandSelectButton);

		const selectedOption = screen.getByRole('option', { name: /ferrari/i });
		userEvent.click(selectedOption);
		expect(searchButton).not.toBeDisabled();

		await waitFor(() => {
			expect(ModelService.getModelByBrandId).toHaveBeenCalledTimes(1);
			expect(ModelService.getModelByBrandId).toHaveBeenCalledWith(
				brandId,
				mockHandleError
			);
		});
	});

	it('should change the selected item when the user selects another model', async () => {
		render(<CarFormContainer />);

		await waitFor(() => {
			expect(BrandService.getBrands).toHaveBeenCalledTimes(1);
			expect(BrandService.getBrands).toHaveBeenCalledWith(mockHandleError);
		});

		const brandSelectButton = screen.getAllByTestId('toggle-button')[0];
		userEvent.click(brandSelectButton);

		const selectedBrand = screen.getByRole('option', { name: /ferrari/i });
		userEvent.click(selectedBrand);

		const ModelSelectButton = screen.getAllByTestId('toggle-button')[1];
		expect(ModelSelectButton).toHaveTextContent(/select a model/i);

		await waitFor(() => {
			expect(ModelSelectButton).toHaveTextContent(/F8/i);
			userEvent.click(ModelSelectButton);
		});

		const newSelectedModel = screen.getByRole('option', {
			name: /458 spider/i,
		});
		userEvent.click(newSelectedModel);
		expect(ModelSelectButton).toHaveTextContent(/458 spider/i);
	});

	it('should call the submit function when the button is clicked', async () => {
		window.HTMLFormElement.prototype.submit = () => {};
		const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

		render(<CarFormContainer />);

		const searchButton = screen.getByRole('button', {
			name: /search car/i,
		});

		const keywordsInput = screen.getByPlaceholderText(/keywords/i);
		userEvent.type(keywordsInput, 'a');

		await waitFor(() => {
			userEvent.click(searchButton);
		});

		expect(logSpy).toBeCalledTimes(1);
		expect(logSpy).toBeCalledWith('submit');
	});
});
