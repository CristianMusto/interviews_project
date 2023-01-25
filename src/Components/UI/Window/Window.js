const Window = props => {
    return (
        <div className={`${props.className}`}>
            <ul className={props.classNameDots}>
                <li className={props.classNameDotsClose}></li>
                <li className={props.classNameDotsMin}></li>
                <li className={props.classNameDotsExpand}></li>
            </ul>

            {props.imgSrc 
                ? 
                <div className={props.classNameImgContainer}>
                    <img src={props.imgSrc} alt={props.imgAlt} className={props.classNameImg}/>
                </div> 
                : 
                ""
            }

            <div className={props.classNameContent}>
                <h2>
                    {props.title}
                </h2>

                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Window