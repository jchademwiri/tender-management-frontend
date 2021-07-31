import React from 'react';
import Router from './Router';
import axios from 'axios';
import { AuthContextProvider } from './context/AuthContext';

import './App.css';

axios.defaults.withCredentials = true;

function App() {
	return (
		<AuthContextProvider>
			<Router />
		</AuthContextProvider>
	);
}

export default App;
