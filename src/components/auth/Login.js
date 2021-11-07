import axios from 'axios';

import './login.scss';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();

	async function login(e) {
		e.preventDefault();

		try {
			const loginData = {
				email,
				password
			};

			// await axios.post('http://localhost:5000/auth/login', loginData);
			await axios.post(
				'https://newtenders.herokuapp.com/auth/login',
				loginData
			);
			await getLoggedIn();
			history.push('/dashboard');
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className='login_container'>
			<div className='login_card'>
				<h1>Log in to your account</h1>
				<form className='form' onSubmit={login}>
					<input
						className='form_input'
						type='email'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<input
						className='form_input'
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<button className='form_input' type='submit'>
						Log in
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
