import "./Loader.scss";

const Loader = () => {

    const timesLeft = [
        3, 2, 1
    ];

    const timeUnits = ["seconds"];
    const unitChangePts = [3,8,20];
    let progress = -1;
    const int = 3;

    const update = () => {
        ++progress;
        let timeLeftVal = timesLeft[progress],
            timeLeftUnit = timeUnits[timeUnits.length - 1];
        
        // get proper unit
        for (let p in unitChangePts) {
            if (progress < unitChangePts[p]) {
                timeLeftUnit = timeUnits[p];
                break;
            }
        }
        if (timeLeftVal != 1) {
            timeLeftUnit += "s";
        }
        
        document.getElementById("time-left").innerHTML = timeLeftVal + " " + timeLeftUnit;
        
        // loop
        if (progress < timesLeft.length - 1) {
            setTimeout(update, int);
        }
    };

    setTimeout(function(){
		update();
		document.getElementsByClassName("progress")[0].classList.add("filling");
	}, int);

    return (
        <div className="loader">
            <div className="loader-container">

                <div className="update-bar">
                    <div className="progress"></div>
                </div>
                <div className="feedback">
                    Loading: About <span id="time-left">3 seconds</span> remaining
                </div>
            </div>
        </div>
    )
}

export default Loader