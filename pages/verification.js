import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import FlatButton from "../components/FlatButton";
import Input from "../components/Input";
import styles from "../styles/Home.module.css";

export default function verification() {
	return (
		<div className={styles.container}>
			<div className={styles.card} style={{ width: "360px" }}>
				<p className="bold large m-0 text-center">Email Verification</p>
				<p className="text-center">
					Enter the 6 digit code, we sent to your email
				</p>
				<br />
				<Input
					type="text"
					placeholder="Code"
					className="text-center spacing-4 semi-large"
					maxSize="6"
				/>
				<div className="flex justify-between">
					<Link href="/verification">
						<a>
							<FlatButton title="Resend Code" />
						</a>
					</Link>
					<Link href="/dashboard">
						<a>
							<Button title="Verify" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
