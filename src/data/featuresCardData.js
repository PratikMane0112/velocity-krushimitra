import cropGif from "../assets/image/crop.gif"
import fertGif from "../assets/image/fert.gif"
import cropYieldGif from "../assets/image/crop_yield.gif";
import cropMarketTrendGif from "../assets/image/crop_market_trend.gif";

const CardData = [
    {
      title: "Soil Analysis based on location & report",
      description:"Genarate the soil analysis report suitable for crops based of report provided & location",
      image: cropGif,
      path:"/cropRecommendation"
  
    },
    {
      title: "Fertilizer Recommendation & usage suggestion",
      description:"Advises on the ideal fertilizer for a specific soil and predict optimal fertilizer quantity in kg/Acres",
      image:fertGif,
      path: "/model1"
  
    },
    {
      title: "Weather Driven farm report",
      description:"Generate a report based on current weather with live location",
      image:cropYieldGif,
      path: "/model3"
  
    },
    {
      title: "Plant market Trend Market Price",
      description:"Analyze the crop and vegetable prices in market and provide suggestions to optimize farmer's profit",
      image:cropMarketTrendGif,
      path: "/model4"
  
    },
  
  ]

export default CardData;