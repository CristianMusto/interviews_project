const Window = props => {
    return (
        <div className={`${props.className}`}>
            <ul className={props.classNameDots}>
                <li className={props.classNameDotsClose}></li>
                <li className={props.classNameDotsMin}></li>
                <li className={props.classNameDotsExpand}></li>
            </ul>

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