import { useState } from "react";

const ToggleSwitch = () => {
	const [isToggled, setIsToggled] = useState(false);
	const handleToggle = () => {
		setIsToggled(!isToggled);
	};
	return (
		<div>
			<input
				type="checkbox"
				name="toggle"
				id="toggle"
				onChange={handleToggle}
			/>
			<label htmlFor="toggle">{isToggled ? "On" : "Off"}</label>
		</div>
	);
};
export default ToggleSwitch;
