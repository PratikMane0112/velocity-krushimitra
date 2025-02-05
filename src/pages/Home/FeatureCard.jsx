import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
	FaChartLine,
	FaRobot,
	FaHeartbeat,
	FaRegLightbulb,
	FaWater,
	FaCloudSun,
} from "react-icons/fa";
import { MdComputer, MdSensors } from "react-icons/md";

const features = [
	{
		icon: <MdSensors className="text-emerald-600" />,
		title: "Real-Time Soil Analysis",
		description:
		  "Analyze soil health with lab reports to provide real-time insights and improve crop yield with tailored recommendations.",
	  },
	  {
		icon: <FaRobot className="text-emerald-600" />,
		title: "Automated Pesticide Recommendations",
		description:
		  "Receive automated pesticide recommendations based on plant images, enhancing crop protection with minimal manual effort.",
	  },
	  {
		icon: <FaWater className="text-emerald-600" />,
		title: "Maximized Crop Yield Predictions",
		description:
		  "Utilize predictive analytics to help farmers choose the best crops and market prices for maximum profit, reducing uncertainty.",
	  },
	  {
		icon: <FaCloudSun className="text-emerald-600" />,
		title: "Weather-Aware Crop Pricing",
		description:
		  "Adjust pricing predictions based on weather forecasts, ensuring farmers get the best price for their crops in different markets.",
	  },
];

const FeatureCard = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
		});
	}, []);

	return (
		<section className="services-section py-8 md:py-12 md:mt-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl font-extrabold">Our Features</h2>
				<p className="mt-4 text-lg leading-6">
				Explore how our smart farming system empowers farmers with real-time insights and intelligent automation for efficient crop management.
				</p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							data-aos="fade-up"
							whileHover={{
								scale: 1.1,
								rotateX: 5,
								rotateY: 5,
								boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.6)", // Green glow effect
							}}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 10,
							}}
							className="service-item p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300"
						>
							<div className="icon-container mb-4 flex justify-center items-center">
								<div className="icon text-indigo-600 dark:text-indigo-300 text-4xl sm:text-5xl lg:text-6xl">
									{feature.icon}
								</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
							<p className="mt-2 text-gray-700 dark:text-gray-300">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureCard;
