import './App.scss';
import { useEffect } from 'react';
import Main from './Components/Main/Main';
import MenuBar from './Components/MenuBar/MenuBar'
import Loader from './Components/UI/Loader/Loader';

function App() {

  const handleVH = () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  }

  useEffect(() =>{
    handleVH();

    window.addEventListener("resize", () => {
      handleVH();
    })
  })

  return (
    <div className="App">
      <Loader />
      <MenuBar />
      <Main />
    </div>
  );
}

export default App;
