import Contentstack from "contentstack";
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT
);
console.log("Stack", Stack);
export default Stack;
