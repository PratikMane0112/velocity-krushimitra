import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import ChatBot from "../common/Chatbot";

const MainLayout = () => {

	return (
		<>
			<div className="flex flex-col min-h-screen">
				{/* <ScrollToTop/> */}
				<Navbar />
				<main className="flex-grow">
					<Outlet />
					<ChatBot />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
