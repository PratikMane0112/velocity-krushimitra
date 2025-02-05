import irrigationMonitoring from "../assets/image/info-img-1.jpeg";
import importance from "../assets/image/info-img-2.jpg";
import systemFlow from "../assets/image/info-img-3.jpg";
import features from "../assets/image/info-img-4.jpg";
import goals from "../assets/image/goals.jpg";
import getstarted from "../assets/image/survey.jpg";

const sections = [
  {
    title: "What is Smart Farming?",
    content: [
      "Smart farming utilizes AI and IoT-based technologies to help farmers optimize their crop management. It integrates soil analysis, weather forecasts, and automated pesticide recommendations to boost crop yields while reducing resource waste.",
      "By analyzing environmental data and crop-specific needs, the system provides insights to ensure optimal farming practices and reduce the need for manual intervention.",
    ],
    img: irrigationMonitoring,
    reverse: false,
  },
  {
    title: "Why is Smart Farming Important?",
    content: [
      "Smart farming enhances crop productivity by providing real-time insights into soil conditions, pesticide needs, and market predictions.",
      "It promotes sustainable agriculture by enabling farmers to conserve resources like water and fertilizer, and reduces environmental impact.",
      "By integrating advanced technologies, smart farming supports data-driven decisions, improving both crop health and farm profitability.",
    ],
    img: importance,
    reverse: true,
  },
  {
    title: "How Our System Works",
    content: [
      "Our platform analyzes soil health through lab reports and weather conditions, offering automated pesticide recommendations and crop yield predictions.",
      "Using AI-driven insights, the system provides tailored advice and predictions, ensuring farmers receive actionable information to improve crop management.",
      "Farmers can monitor soil conditions, pesticide recommendations, and market price predictions remotely through our user-friendly web application.",
    ],
    img: systemFlow,
    reverse: false,
  },
  {
    title: "Key Features of Our System",
    content: [
      "Real-time soil analysis using lab reports and sensor data",
      "Automated pesticide recommendations based on plant health and conditions",
      "Market price prediction to optimize crop sales",
      "User-friendly web interface for managing crop data, predictions, and recommendations",
      "Cloud storage for storing historical data to track crop health and trends",
    ],
    img: features,
    reverse: true,
  },
  {
    title: "Our Goals",
    content: [
      "Optimizing Crop Yield through Data-Driven Decisions",
      "Supporting Farmers with Automated and Expert-Driven Recommendations",
      "Promoting Sustainable Farming Practices with AI and IoT",
      "Improving Accessibility and Profitability for Farmers",
    ],
    img: goals,
    reverse: false,
  },
  {
    title: "Get Started with Smart Farming",
    content: [
      "Begin your journey towards optimized crop management with our smart farming platform. In just a few simple steps, you can start monitoring, controlling, and improving your farming practices remotely, ensuring sustainable and profitable outcomes.",
    ],
    img: getstarted,
    reverse: true,
  },
];

export default sections;
