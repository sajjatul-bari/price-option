import "./App.css";
import LineChart from "./component/LineChart/LineChart";
// import DaisyNav from "./component/DaisyNav/DaisyNav";
import NevBar from "./component/NevBar/NevBar";
import PriceOptions from "./component/PriceOptions/PriceOptions";

function App() {
  return (
    <>
    <NevBar></NevBar>
    <PriceOptions></PriceOptions>
    {/* <DaisyNav></DaisyNav> */}
    <LineChart></LineChart>
    </>
  );
}

export default App;
