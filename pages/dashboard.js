import Head from "next/head";

function Dashboard() {
	return (
		<div className="dashboard">
			<Head>
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
				/>
			</Head>
			<div className="dashboard-header">
				<div className="dashboard-header-title">
					<h1>Dashboard</h1>
				</div>
				<div className="dashboard-header-buttons">
					<button className="btn btn-primary">
						<i className="fas fa-plus"></i>
					</button>
					<button className="btn btn-primary">
						<i className="fas fa-cog"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
