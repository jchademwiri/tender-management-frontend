import '../styles/dashboard.scss';

const Dashboard = () => {
	return (
		<>
			<div className='container'>
				<h1>DashBoard</h1>
				<div className='card_container'>
					<div className='container_card openTenders'>
						<h3>Open Tenders </h3>
						<p>10</p>
					</div>
					<div className='container_card meetings'>
						<h3>Upcoming Meetings </h3>
						<p>10</p>
					</div>
					<div className='container_card submitted'>
						<h3>Submited Tenders </h3>
						<p>10</p>
					</div>
					<div className='container_card awarded'>
						<h3>Awarded </h3>
						<p>10</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
