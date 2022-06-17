import { useSelector } from "react-redux";


function App() {
  const counter = useSelector(store => store.value);


  return (  
    <div className="App">
     <h1>0</h1>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
