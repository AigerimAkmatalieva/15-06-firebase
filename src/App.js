import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Name from "./components/Name";


function App() {
  const counter = useSelector(store => store.value);

  const name = useSelector((store) => {
    return store.name.name;
  })
  return (  
    <div className="App">
     <Counter/>
     <Name/>
     <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
