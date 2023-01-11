import "./Finder.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const Finder = () => {

    const [focusW, setFocusW] = useState(false);
    const [focusC, setFocusC] = useState(false);
    const [focusF, setFocusF] = useState(false);
    const [activeW, setActiveW] = useState(false);
    const [activeC, setActiveC] = useState(false);
    const [activeF, setActiveF] = useState(false);

    const [fileFocusW, setFileFocusW] = useState(false)
    const [docFocusW, setDocFocusW] = useState(false)
    const [fileFocusC, setFileFocusC] = useState(false)
    const [fileFocusF, setFileFocusF] = useState(false)

    const folderClickHandleW = () => {
        if (focusW === false) {
            setFocusW(true)
            setFocusC(false)
            setFocusF(false)
            setActiveW(true)
            setActiveC(false)
            setActiveF(false)
        } else {
            setFocusW(false)
            setFocusC(false)
            setFocusF(false)
            setActiveW(false)
            setActiveC(false)
            setActiveF(false)
        }
    }

    const folderClickHandleC = () => {
        if (focusC === false) {
            setFocusW(false)
            setFocusC(true)
            setFocusF(false)
            setActiveW(false)
            setActiveC(true)
            setActiveF(false)
        } else {
            setFocusW(false)
            setFocusC(false)
            setFocusF(false)
            setActiveW(false)
            setActiveC(false)
            setActiveF(false)
        }
    }

    const folderClickHandleF = () => {
        if (focusF === false) {
            setFocusW(false)
            setFocusC(false)
            setFocusF(true)
            setActiveW(false)
            setActiveC(false)
            setActiveF(true)
        } else {
            setFocusW(false)
            setFocusC(false)
            setFocusF(false)
            setActiveW(false)
            setActiveC(false)
            setActiveF(false)
        }
    }

    const fileClickHandleW = () => {
        if ( fileFocusW === false) {
            setFileFocusW(true)
            setDocFocusW(false)
            setFileFocusC(false)
            setFileFocusF(false)
        } else {
            setFileFocusW(false)
            setDocFocusW(false)
            setFileFocusC(false)
            setFileFocusF(false)
        }
    }

    const docClickHandleW = () => {
        if ( docFocusW === false) {
            setDocFocusW(true)
            setFileFocusW(false)
            setFileFocusC(false)
            setFileFocusF(false)
        } else {
            setDocFocusW(false)
            setFileFocusW(false)
            setFileFocusC(false)
            setFileFocusF(false)
        }
    }

    const fileClickHandleC = () => {
        if ( fileFocusC === false) {
            setFileFocusC(true)
            setFileFocusW(false)
            setDocFocusW(false)
            setFileFocusF(false)
        } else {
            setFileFocusC(false)
            setFileFocusW(false)
            setDocFocusW(false)
            setFileFocusF(false)
        }
    }

    const fileClickHandleF = () => {
        if ( fileFocusF === false) {
            setFileFocusF(true)
            setFileFocusW(false)
            setDocFocusW(false)
            setFileFocusC(false)
        } else {
            setFileFocusF(false)
            setFileFocusW(false)
            setDocFocusW(false)
            setFileFocusC(false)
        }
    }

    return (
        <div className="window">
            <div className="sidebar">
                <ul className="dots">
                    <li className="close"></li>
                    <li className="min"></li>
                    <li className="expand"></li>
                </ul>
    
                <ul className="sidebarFav">
                    <li className="fav">Preferiti</li>
                    <li className="air">AirDrop</li>
                    <li className="rec">Recenti</li>
                    <li className="app">Applicazioni</li>
                    <li className="dloads">Downloads</li>
                    <li className="docs">Documenti</li>
                </ul>
    
                <ul className="device">
                    <li className="dev">Dispositivi</li>
                    <li className="pc">PC</li>
                    <li className="hard">T7</li>
                </ul>
            </div>

            <ul className="header">
                <li className="prev">&lt;</li>
                <li className="next">&gt;</li>
                <li className="documents">Documenti</li>
            </ul>

            <div className="contentFolders">
                <ul className={`${"folderW"} ${focusW ? "active" : ''}`} onClick={folderClickHandleW}>
                    <li className="folder">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                    </li>
                    <li className="name">Chi siamo</li>
                </ul>

                <ul className={`${"folderC"} ${focusC ? "active" : ''}`} onClick={folderClickHandleC}>
                    <li className="folder">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                    </li>
                    <li className="name">Course</li>
                </ul>

                <ul className={`${"folderF"} ${focusF ? "active" : ''}`} onClick={folderClickHandleF}>
                    <li className="folder">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                    </li>
                    <li className="name">Domande frequenti</li>
                </ul>
            </div>

            <div className={`${"contentW"} ${activeW ? "active" : ''}`}>
                <ul className={`${"fileW"} ${fileFocusW ? "active" : ''}`} onClick={fileClickHandleW}>
                    <li className="file">
                        <FontAwesomeIcon icon={faFile} className="icon"/>
                    </li>
                    <li className="name">Chi_siamo.txt</li>
                </ul>
                <ul className={`${"docentW"} ${docFocusW ? "active" : ''}`} onClick={docClickHandleW}>
                    <li className="file">
                        <FontAwesomeIcon icon={faFile} className="icon"/>
                    </li>
                    <li className="name">Il_nostro_docente.txt</li>
                </ul>
            </div>

            <div className={`${"contentC"} ${activeC ? "active" : ''}`}>
                <ul className={`${"fileC"} ${fileFocusC ? "active" : ''}`} onClick={fileClickHandleC}>
                    <li className="file">
                        <FontAwesomeIcon icon={faFile} className="icon"/>
                    </li>
                    <li className="name">I_nostri_corsi.txt</li>
                </ul>
            </div>

            <div className={`${"contentF"} ${activeF ? "active" : ''}`}>
                <ul className={`${"fileF"} ${fileFocusF ? "active" : ''}`} onClick={fileClickHandleF}>
                    <li className="file">
                        <FontAwesomeIcon icon={faFile} className="icon"/>
                    </li>
                    <li className="name">Domande_frequenti.txt</li>
                </ul>
            </div>

        </div>
    )
}

export default Finder