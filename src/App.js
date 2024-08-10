import "./App.css";
import ContextMenu from "./components/ContextMenu";
import PopoverButton from "./components/PopoverButton";

function App() {
  return (
    <div className="App">
      <div className="flex ml-32 mt-12 justify-evenly">
        <PopoverButton />
        <ContextMenu />
      </div>
    </div>
  );
}

export default App;
