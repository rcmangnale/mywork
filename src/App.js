
import './App.css';
import Navbar from "./components/Navbar"
import Began from "./components/Began"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='flex justify-center bg-gray-200'>
      <Began></Began>
      </div>
    </div>
  );
}

export default App;
