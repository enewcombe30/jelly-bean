import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-fit m-auto">Jelly Bean</div>
      <div className="w-[8rem] ml-4">
        <div>{<DropdownMenu />}</div>
      </div>
    </div>
  );
}

export default App;
