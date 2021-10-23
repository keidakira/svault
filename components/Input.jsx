import { useState } from "react";
import styles from "../styles/Input.module.css";

const Input = (props) => {
	let classes = props.className ?? "";
	let inputClasses = [styles.input, classes].join(" ");
	let maxSize = props.maxSize ?? undefined;

	let [value, setValue] = useState(props.value ?? "");

	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			className={inputClasses}
			style={props.style}
			onChange={(e) => {
				setValue(e.target.value);
			}}
		/>
	);
};

export default Input;
