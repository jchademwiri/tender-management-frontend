import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordVerify, setPasswordVerify] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();

	async function register(e) {
		e.preventDefault();

		try {
			const registerData = {
				firstName,
				lastName,
				email,
				password,
				passwordVerify,
			};

			// await axios.post('http://localhost:5000/auth/', registerData);
			await axios.post('https://tmtbackend.herokuapp.com/auth/', registerData);
			await getLoggedIn();
			alert('New user Added!');
			history.push('/users');
		} catch (err) {
			alert('Error: New user Not Added!');
			console.error(err);
		}
	}

	return (
		<div>
			<h1>Register a new account</h1>
			<form onSubmit={register}>
				<input
					type='text'
					placeholder='First Name'
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
				/>
				<input
					type='text'
					placeholder='Last Name'
					onChange={(e) => setLastName(e.target.value)}
					value={lastName}
				/>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<input
					type='password'
					placeholder='Verify your password'
					onChange={(e) => setPasswordVerify(e.target.value)}
					value={passwordVerify}
				/>
				<button type='submit'>Register</button>
			</form>
		</div>
	);
}

export default Register;
