import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import FlatButton from "../components/FlatButton";
import Input from "../components/Input";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.card} style={{ width: "360px" }}>
				<p className="bold large m-0 text-center">Sign In</p>
				<p className="text-center">to your secret vault</p>
				<br />
				<Input type="text" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<div className="flex justify-between">
					<Link href="/signup">
						<a>
							<FlatButton title="Create an account" />
						</a>
					</Link>
					<Link href="/verification">
						<a>
							<Button title="Sign In" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
