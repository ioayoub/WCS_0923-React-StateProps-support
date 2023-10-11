import "./App.css";
import Lego from "./components/Lego";

function App() {
  return (
    <>
      <h1>Support React Props</h1>
      <Lego width={20} height={40} backgroundColor={"yellow"} />
      <Lego width={15} height={50} backgroundColor={"red"} />
      <Lego width={50} height={80} backgroundColor={"blue"} />
    </>
  );
}

export default App;
