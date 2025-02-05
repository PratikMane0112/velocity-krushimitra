import { useContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/Home/HomePage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import Auth from "./components/layouts/Auth.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Info from "./pages/Info/InfoPage.jsx";
import About from "./pages/About/AboutPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import FeedBackPage from "./pages/Feedback/FeedBackPage.jsx";

import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import IrrigationWaterReq from "./pages/IrrigationWaterReq/IrrigationWaterReq.jsx";
import OptimalCropSeason from "./pages/OptimalCropSeason/OptimalCropSeason.jsx";
import FertilizerRecommendation from "./pages/FertilizerRecommendation/FertilizerRecommendation.jsx";
import CropRecommendationPage from "./pages/CropRecommendation/CropRecommendationPage.jsx";
import CropYieldPredictor from "./pages/CropYieldPredictor/CropYieldPredictor.jsx";
import GeoSpatialCropAnalysis from "./pages/GeoSpatialCropAnalysis/GeoSpatialCropAnalysis.jsx";
import PumpAndIrrigationStatus from "./pages/PumpAndIrrigationStatus/PumpAndIrrigationStatus.jsx";
import CropMarketTrendAnalyzerPage from "./pages/CropMarketTrendAnalyzer/CropMarketTrendAnalyzerPage.jsx";
import Loader from "./components/common/Loader.jsx"
import Model from "./pages/Model/Model.jsx"
import Model2 from "./pages/Model/Model2.jsx"
const queryClient = new QueryClient();

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
       <Loader />
    );
};

const HomePageWithSplash = () => {
    const [showSplash, setShowSplash] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/" && location.pathname !== "/home") {
            setShowSplash(false);
        }
    }, [location]);

    return showSplash ? <SplashScreen onComplete={() => setShowSplash(false)} /> : <HomePage />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "home", element: <HomePageWithSplash /> },
            // { path: "waterNeedAnalysis", element: <IrrigationWaterReq /> },
            // { path: "waterNeedAnalysis/result", element: <IrrigationWaterReq /> },
            // { path: "pumpAndIrrigationStatus", element: <PumpAndIrrigationStatus /> },
            { path: "info", element: <Info /> },
			{ path: "model", element: <Model /> },
			{ path: "model2", element: <Model2 /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            // { path: "users/:userId/feedback", element: <FeedBackPage /> },
            { path: "/", element: <HomePageWithSplash />, index: true },
            // { path: "fertilizerRecommendation", element: <FertilizerRecommendation /> },
            // { path: "cropRecommendation", element: <CropRecommendationPage /> },
            // { path: "optimalCropSeason", element: <OptimalCropSeason /> },
            // { path: "cropYieldPredictor", element: <CropYieldPredictor /> },
            // { path: "geoSpatialCropAnalysis", element: <GeoSpatialCropAnalysis /> },
            // { path: "cropMarketTrendAnalyzer", element: <CropMarketTrendAnalyzerPage /> },
        ],
    },
    // {
    //     path: "/auth",
    //     element: <Auth />,
    //     children: [
    //         { path: "login", element: <LoginPage /> },
    //         { path: "register", element: <RegisterPage /> }
    //     ],
    // },
]);

const AppContent = () => {
    const { theme } = useContext(ThemeContext);
    const muiTheme = createTheme({
        palette: {
            mode: theme === "light" ? "light" : "dark",
        },
    });

    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
                <RouterProvider router={router} />
            </div>
        </MuiThemeProvider>
    );
};

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;