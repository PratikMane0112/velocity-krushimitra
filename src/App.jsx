import { useContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/Home/HomePage.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Info from "./pages/Info/InfoPage.jsx";
import About from "./pages/About/AboutPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/common/Loader.jsx"
import Model1 from "./pages/Model/Model1.jsx"
import Model2 from "./pages/Model/Model2.jsx"
import Model3 from "./pages/Model/Model3.jsx"
import Model4 from "./pages/Model/Model4.jsx"
import Model5 from "./pages/Model/Model5.jsx"
import Model6 from "./pages/Model/Model6.jsx";

import CropRecommendationPage from "./pages/CropRecommendation/CropRecommendationPage.jsx";

const queryClient = new QueryClient();

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1500);

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
			{ path: "model1", element: <Model1 /> },
			{ path: "model2", element: <CropRecommendationPage /> },
            { path: "model3", element: <Model3 /> },
            { path: "model4", element: <Model4 /> },
			{ path: "model5", element: <Model5 /> },
            { path: "model6", element: <Model6 /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            // { path: "users/:userId/feedback", element: <FeedBackPage /> },
            { path: "/", element: <HomePageWithSplash />, index: true },
            // { path: "fertilizerRecommendation", element: <FertilizerRecommendation /> },
            { path: "cropRecommendation", element: <CropRecommendationPage /> },
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