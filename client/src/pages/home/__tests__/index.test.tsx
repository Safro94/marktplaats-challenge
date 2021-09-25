import { render, screen } from '../../../utils/test-utils';

import Home from '..';

jest.mock('../../../containers/carFormContainer', () => () => (
	<div>CarFormContainer container</div>
));

describe('Home', () => {
	it('should render the mocked container', () => {
		render(<Home />);

		expect(screen.getByText(/carFormContainer container/i)).toBeInTheDocument();
	});
});
