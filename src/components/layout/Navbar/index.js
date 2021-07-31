import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

import LogOutBtn from '../../auth/LogOutBtn';

import './Navbar.css';

function Navbar() {
	const { loggedIn } = useContext(AuthContext);

	return (
		<div>
			{loggedIn === false && (
				<>
					<Link to='/' className='nav_item'>
						Home
					</Link>
					<Link to='/about' className='nav_item'>
						About
					</Link>
					<Link to='/login' className='nav_item'>
						Log in
					</Link>
				</>
			)}
			{loggedIn === true && (
				<>
					<Link to='/dashboard' className='nav_item'>
						Dashboard
					</Link>
					<Link to='/register' className='nav_item'>
						Add User
					</Link>
					<Link to='/users' className='nav_item'>
						Users
					</Link>
					<Link to='/customers' className='nav_item'>
						Customers
					</Link>
					<Link to='/tenders' className='nav_item'>
						Tenders
					</Link>
					<Link to='/addtender' className='nav_item'>
						Add Tender
					</Link>
					<LogOutBtn className='nav_item' />
				</>
			)}
		</div>
	);
}

export default Navbar;
