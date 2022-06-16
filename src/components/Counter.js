import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

function Counter() {

  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterControls onDecrement={onDecrement} onIncrement={onIncrement} />
    </div>
  );
}

export default Counter;