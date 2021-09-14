import React from 'react';
import moment from 'moment';

// const todayDate = tender_meeting_date;

function TenderList({ tenders }) {
	function renderTenders() {
		return tenders.map((tender, _id) => {
			return (
				<>
					<li key={_id}>
						<h2>{tender.tender_number}</h2>
						<p> {tender.tender_description}</p>
						<p> {tender.tender_employer}</p>
						<p>{moment(tender.tender_meeting_date).format('DD-MMMM-YYYY')}</p>
						<p>{moment(tender.tender_closing_date).format('DD-MM-YYYY')}</p>
						<p> {tender.tender_contact_details}</p>
					</li>
				</>
			);
		});
	}

	return (
		<div>
			<ol>{renderTenders()}</ol>
		</div>
	);
}

export default TenderList;
