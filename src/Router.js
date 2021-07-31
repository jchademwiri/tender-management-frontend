import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Customers from './components/customers/Customers';
import Navbar from './components/layout/Navbar';
import TenderForm from './components/tenders/TenderForm';
import Tenders from './components/tenders/Tenders';
import Users from './components/users/Users';
import AuthContext from './context/AuthContext';
import Home from './pages';
import About from './pages/about';
import Dashboard from './pages/dashboard';

function Router() {
	const { loggedIn } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				{loggedIn === false && (
					<>
						<Route path='/login'>
							<Login />
						</Route>
					</>
				)}

				{loggedIn === true && (
					<>
						<Route exact path='/'>
							history.push('/dashboard')
						</Route>
						<Route path='/dashboard'>
							<Dashboard />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
						<Route path='/users'>
							<Users />
						</Route>
						<Route path='/customers'>
							<Customers />
						</Route>
						<Route path='/tenders'>
							<Tenders />
						</Route>
						<Route path='/addtender'>
							<TenderForm />
						</Route>
					</>
				)}
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
