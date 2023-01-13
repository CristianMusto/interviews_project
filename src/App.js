import './App.scss';
import { useEffect, useState } from 'react';
import Main from './Components/Main/Main';
import MenuBar from './Components/MenuBar/MenuBar'
import Loader from './Components/UI/Loader/Loader';

function App() {
  const [isInView, setIsInView] = useState(false);

  const handleVH = () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  }

  const viewActiveHandler = () => {
    setIsInView(true);
  }

  const viewInactiveHandler = () => {
    setIsInView(false);
  }

  useEffect(() =>{
    handleVH();
    window.addEventListener("resize", () => {
      handleVH();
    })
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])


  return (
    <div className="App">
      <Loader />
      <MenuBar onActive={viewActiveHandler} onInactive={viewInactiveHandler}/>
      <Main isInView={isInView}/>
    </div>
  );
}

export default App;
