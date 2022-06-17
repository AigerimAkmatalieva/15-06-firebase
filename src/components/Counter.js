import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  return ( 
    <div className="Counter">
   <CounterDisplay />
   <CounterControls />
    </div>
   );
}

export default Counter;