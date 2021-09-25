import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Error from '../error';

import { HOME } from '../../constants/routes';

import Home from '../../pages/home';
import NotFound from '../../pages/notFound';

import { Container } from './index.styles';

const App = () => {
	return (
		<Container>
			<Router>
				<ErrorBoundary FallbackComponent={Error}>
					<Switch>
						<Route exact path={HOME}>
							<Home />
						</Route>

						<Route component={NotFound} />
					</Switch>
				</ErrorBoundary>
			</Router>
		</Container>
	);
};

export default App;
