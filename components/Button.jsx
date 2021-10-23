import styles from "../styles/Button.module.css";

const Button = (props) => {
	let classes = [styles.button];

	if (props.width == "full") {
		classes.push(styles["button_fullWidth"]);
	}

	return <button className={classes.join(" ")}>{props.title}</button>;
};

export default Button;
