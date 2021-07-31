import React from 'react';
import moment from 'moment';

const todayDate = new Date();

function TenderList({ tenders }) {
	function renderTenders() {
		return tenders.map((tender, tender_number) => {
			return (
				<>
					<li key={tender_number}>
						<h2>{tender.tender_number}</h2>
						<p> {tender.tender_description}</p>
						<p> {tender.tender_employer}</p>
						<p>
							{
								(tender.tender_meeting_date = moment(
									todayDate,
									'DD-MM-YYY'
								).format('DD-MMMM-YYYY'))
							}
						</p>
						<p>
							{
								(tender.tender_closing_date = moment(
									todayDate,
									'DD-MM-YYY'
								).format('DD-MMMM-YYYY'))
							}
						</p>
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
