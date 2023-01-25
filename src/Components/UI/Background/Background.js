import "./Background.scss";

const LAYERS = 10;
const X_VARIANCE = 250;
const Y_VARIANCE = 250;
const HUE_VARIANCE = 50;

const Mountain = ({index, hue: _hue}) => {
    const i = index / (LAYERS - 1);
    const hue = _hue+i*HUE_VARIANCE;
  
    return (
        <>
        <defs>
            <linearGradient id={`gradient-${i}`} x2="0%" y2="100%">
                <stop offset="0%" stopColor={`hsl(${hue}deg,${100-i*60}%,${50-i*25}%)`} />
                <stop offset="100%" stopColor={`hsl(${hue}deg,${100-i*60}%,${30-i*30}%)`} />
            </linearGradient>
        </defs>
        <path d={
            'M0 305C0 304 ' + '-15,349,89,387C188,423,153,539,228,576C294,609,257,746,477,741C708,736,649,575,756,559C860,545,836,419,897,396C958,374,996,280' +
            ' 1000 281V1000H0z'
            } style={{
                fill: `url(#gradient-${i})`,
                transformOrigin: 'center',
                transform: `translate(${Math.round(Math.sin(i*Math.PI)*X_VARIANCE - X_VARIANCE / 2)}px,${Math.round(-(1-i)*Y_VARIANCE)}px) scale(${1+X_VARIANCE/1000+0.1}, ${1+Y_VARIANCE/1000+0.1})`,
            }} stroke="#ffffff" strokeWidth="0.75">
        </path>
        </>
    );
}

const Background = (props) => {
    
    return (
        <div className={`${"background"} ${props.className}`}>
            <svg className='mountains' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
                <path fill="none" d='M0,0 L1000,0 1000,1000 L0,1000 z'/>
                {[...new Array(LAYERS)].map((_, i) => (
                    <Mountain index={i} hue={-7000} key={i}/>
                ))}
            </svg>
        </div>
    );
}

export default Background