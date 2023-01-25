import './App.scss';
import { useEffect, useState } from 'react';
import Main from './Components/Main/Main';
import MenuBar from './Components/MenuBar/MenuBar'
import Loader from './Components/UI/Loader/Loader';

function App() {
  const [isInViewWho, setIsInViewWho] = useState(false);
  const [isInViewCourse, setIsInViewCourse] = useState(false);

  const handleVH = () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  }

  const viewActiveWhoHandler = () => {
    setIsInViewWho(true);
  }

  const viewInactiveWhoHandler = () => {
    setIsInViewWho(false);
  }

  const viewActiveCourseHandler = () => {
    setIsInViewCourse(true);
  }

  const viewInactiveCourseHandler = () => {
    setIsInViewCourse(false);
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
      <MenuBar 
        onActiveWho={viewActiveWhoHandler} 
        onInactiveWho={viewInactiveWhoHandler}
        onActiveCourse={viewActiveCourseHandler} 
        onInactiveCourse={viewInactiveCourseHandler}
      />
      <Main isInViewWho={isInViewWho} isInViewCourse={isInViewCourse}/>
    </div>
  );
}

export default App;
