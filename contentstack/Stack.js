import Contentstack from "contentstack";
const Stack = Contentstack.Stack({
  api_key: process.env.API_KEY,
  delivery_token: process.env.DELIVERY_TOKEN,
  environment: process.env.ENVIRONMENT,
  region: "us",
});
export default Stack;
