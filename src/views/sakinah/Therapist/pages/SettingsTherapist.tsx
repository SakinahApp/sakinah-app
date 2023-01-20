import React from "react";
import Onboarding1 from "../Onboarding/Onboarding1";
import Onboarding2 from "../Onboarding/Onboarding2";
import Onboarding3 from "../Onboarding/Onboarding3";

const SettingsTherapist = () => {
	return (
		<div>
			<Onboarding1 hidden={true} />
			<Onboarding2 hidden={true} />
			<Onboarding3 hidden={true} text="Save Changes" />
		</div>
	);
};

export default SettingsTherapist;
