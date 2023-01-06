import './App.scss';
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import Main from './Components/Main/Main';

function App() {

  const handleVH = () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  }

  useEffect(() =>{
    handleVH()
  })

  return (
    <div className="App">
      <Header className="sidebar"/>
      <Main />
    </div>
  );
}

export default App;
