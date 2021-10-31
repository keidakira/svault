import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import FlatButton from "../components/FlatButton";
import Input from "../components/Input";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className="w-1/4 border p-8 rounded-md">
				<p className="bold large m-0 text-center">Sign up</p>
				<p className="text-center">and create your secret vault</p>
				<br />
				<Input type="text" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Input type="password" placeholder="Confirm Password" />
				<div className="flex justify-between">
					<Link href="/">
						<a>
							<FlatButton title="Already have an account?" />
						</a>
					</Link>
					<Link href="/verification">
						<a>
							<Button title="Sign Up" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
