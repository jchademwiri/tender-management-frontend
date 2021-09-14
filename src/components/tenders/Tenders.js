import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import TenderForm from './TenderForm';
import TenderList from './TenderList';

function Tenders() {
	const [tenders, setTenders] = useState([]);

	async function getTenders() {
		// const tendersRes = await axios.get('http://localhost:5000/tender/');
		const tendersRes = await axios.get(
			'https://newtenders.herokuapp.com/tender/'
		);
		setTenders(tendersRes.data);
	}

	useEffect(() => {
		getTenders();
	}, []);

	return (
		<div>
			{/* <TenderForm getTenders={getTenders} /> */}
			<TenderList tenders={tenders} />
		</div>
	);
}

export default Tenders;
