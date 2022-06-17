import { useSelector } from "react-redux";
import Counter from "./components/Counter";


function App() {
  const counter = useSelector(store => store.value);


  return (  
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;
