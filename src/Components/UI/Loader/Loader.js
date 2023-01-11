import Background from "../Background/Background";
import "./Loader.scss";
import Logo from "../../../Images/Logo.png";

const Loader = () => {

    const int = 3;

    setTimeout(function(){
		document.getElementsByClassName("progress")[0].classList.add("filling");
	}, int);

    return (
        <div className="loader">
            <Background className="blurBG"/>
            <div className="loader-container">
                <img src={Logo} alt="logo" className="logo"/>
                <h2>Exploit Interviews</h2>
                <div className="update-bar">
                    <div className="progress"></div>
                </div>
                <div className="feedback">
                    Accedo...
                </div>
            </div>
        </div>
    )
}

export default Loader