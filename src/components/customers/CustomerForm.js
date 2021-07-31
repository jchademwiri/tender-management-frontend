import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CustomerForm({ getCustomers }) {
	const [customerName, setCustomerName] = useState('');
	const history = useHistory();

	async function saveCustomer(e) {
		e.preventDefault();
		try {
			const customerData = {
				name: customerName,
			};
			await axios.post('http://localhost:5000/customer/', customerData);
			// await axios.post(
			//   "Server url/customer/",
			//   customerData
			// );
			getCustomers();
			alert('Customer Added!');
			history.push('/customers');
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div>
			<form onSubmit={saveCustomer}>
				<input
					type='text'
					required={true}
					placeholder='Customer name'
					onChange={(e) => {
						setCustomerName(e.target.value);
					}}
					value={customerName}
				/>
				<button type='submit'>Save new customer</button>
			</form>
		</div>
	);
}

export default CustomerForm;
