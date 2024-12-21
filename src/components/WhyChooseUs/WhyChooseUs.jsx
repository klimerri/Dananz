import "./WhyChooseUs.scss";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ChooseCard } from "../ChooseCard/ChooseCard";

export const WhyChooseUs = () => {
	return (
		<div className="choose__container">
			<SectionHeader name="SERVICE" />

			<h3 className="choose__header">Why Choose Us</h3>

			<p className="choose__text">
				Customize your interior design into a dream place with the best designers and quality furniture. We try our best
				to fulfill your expectations.
			</p>

			<div className="choose__wrapper">
				<ChooseCard
					name="High Quality"
					text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
				/>

				<ChooseCard
					name="High Quality"
					text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
				/>

				<ChooseCard
					name="High Quality"
					text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
				/>
			</div>
		</div>
	);
};
