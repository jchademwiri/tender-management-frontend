import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';

import React, { useState } from 'react';

function TenderForm({ getTenders }) {
	const [tenderNumber, setTenderNumber] = useState('');
	const [tenderDescription, setTenderDescription] = useState('');
	const [tenderEmployer, setTenderEmployer] = useState('');
	const [tenderMeetingDate, setTenderMeetingDate] = useState('');
	const [tenderClosingDate, setTenderClosingDate] = useState('');
	const [tenderContactDetails, setTenderContactDetails] = useState('');
	const history = useHistory();
	async function saveTender(e) {
		e.preventDefault();

		try {
			const tenderData = {
				tender_number: tenderNumber,
				tender_description: tenderDescription,
				tender_employer: tenderEmployer,
				tender_meeting_date: tenderMeetingDate,
				tender_closing_date: tenderClosingDate,
				tender_contact_details: tenderContactDetails,
			};
			await axios.post('http://localhost:5000/tender/', tenderData);
			// await axios.post(
			//   "Server url/customer/",
			//   customerData
			// );
			getTenders();
			alert('New user Added!');
			history.push('/tenders');
		} catch (err) {
			alert('ERROR: New user Not Added!');
			console.error(err);
		}
	}

	return (
		<div>
			<form onSubmit={saveTender}>
				<input
					type='text'
					placeholder='Tender Number'
					required
					onChange={(e) => {
						setTenderNumber(e.target.value);
					}}
					value={tenderNumber}
				/>
				<input
					type='text'
					placeholder='Tender Description'
					onChange={(e) => {
						setTenderDescription(e.target.value);
					}}
					value={tenderDescription}
				/>
				<input
					type='text'
					placeholder='Tender Employer'
					onChange={(e) => {
						setTenderEmployer(e.target.value);
					}}
					value={tenderEmployer}
				/>
				<input
					type='date'
					placeholder='Tender meeting date'
					onChange={(e) => {
						setTenderMeetingDate(e.target.value);
					}}
					value={tenderMeetingDate}
				/>
				{/* ================================  */}
				{/* <DatePicker
					selected={tenderMeetingDate}
					onSelect={handleDateSelect}
					onChange={(date) => setTenderMeetingDate(date)}
					minDate={new Date()}
					value={tenderMeetingDate}
				/> */}
				{/* <DatePicker
					selected={tenderClosingDate}
					onSelect={handleDateSelect}
					placeholder='Tender Clossing date'
					onChange={(date) => setTenderClosingDate(date)}
					minDate={new Date()}
					value={tenderClosingDate}
				/> */}
				{/* selected={date}
  onSelect={handleDateSelect} //when day is clicked
  onChange={handleDateChange} */}
				{/* ===============================  */}
				<input
					type='date'
					placeholder='Tender closing date'
					onChange={(e) => {
						setTenderClosingDate(e.target.value);
					}}
					value={tenderClosingDate}
				/>
				<input
					type='text'
					placeholder='Tender Contact Details'
					onChange={(e) => {
						setTenderContactDetails(e.target.value);
					}}
					value={tenderContactDetails}
				/>
				<button type='submit'>Save Tender</button>
			</form>
		</div>
	);
}

export default TenderForm;
