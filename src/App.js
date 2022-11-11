
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='flex justify-center bg-gray-200'>
      <Header></Header>
      </div>
    </div>
  );
}

export default App;
