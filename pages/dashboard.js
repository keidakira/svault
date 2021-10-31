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
			{/* Dashboard header using Tailwind css */}
			<div className="flex flex-wrap items-center justify-between p-4 mb-4 shadow-md">
				<div className="flex justify-between">
					<h1 className="text-2xl font-bold">Svault</h1>
					<p className="m-0">Dashboard</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
