
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Similar from './components/Similar';
import Remote from "./components/Remote"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='flex justify-center bg-gray-200'>
      <Header></Header>
      </div>
      <div className='flex justify-center bg-gray-200'>
      <Main></Main>
      </div>
      <div className='flex justify-center bg-gray-200'>
        <Similar></Similar>
      </div>
      <Remote></Remote>
      <Footer></Footer>
    </div>
  );
}

export default App;
