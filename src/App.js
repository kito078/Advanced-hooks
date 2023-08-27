import "./App.css";
import CustomHookExample1 from "./components/CustomHookExample1";
import UseRefExample from "./components/UseRefExample";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";

function App() {
  return (
    <div className="App mt-5">
      {/* <UseRefExample2 /> */}
      {/* <UseRefExample3 /> */}
      <CustomHookExample1 />
    </div>
  );
}

export default App;
