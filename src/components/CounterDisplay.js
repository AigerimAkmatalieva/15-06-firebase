import { useSelector } from "react-redux";

function CounterDisplay() {
  
const counter = useSelector();
  return ( 
    <h1 className="CounterDisplay">{counter}</h1>
   );
}

export default CounterDisplay;