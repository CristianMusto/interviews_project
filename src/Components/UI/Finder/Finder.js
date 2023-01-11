import "./Finder.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons'

const Finder = () => {
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
                <ul className="folderW">
                    <li className="folder">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                    </li>
                    <li className="name">Chi siamo</li>
                </ul>

                <ul className="folderC">
                    <li className="folder">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                    </li>
                    <li className="name">Course</li>
                </ul>

                <ul className="folderF">
                    <li className="folder">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                    </li>
                    <li className="name">Domande frequenti</li>
                </ul>
            </div>

            <div className="contentW">
                <ul className="fileW">
                    <li className="file">
                        <FontAwesomeIcon icon={faFile} className="icon"/>
                    </li>
                    <li className="name">Chi_siamo.txt</li>
                </ul>
                <ul className="docentW">
                    <li className="file">
                        <FontAwesomeIcon icon={faFile} className="icon"/>
                    </li>
                    <li className="name">Il_nostro_docente.txt</li>
                </ul>
            </div>

        </div>
    )
}

export default Finder