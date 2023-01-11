import "./Background.scss";
import { useState, useEffect } from "react";

const LAYERS = 10;
const X_VARIANCE = 500;
const Y_VARIANCE = 400;
const HUE_VARIANCE = 80;

const random = (min, max) => Math.round(Math.random() * (max - min) + min);

const rd = (num, deviation) => random(num - deviation, num + deviation);

const randomize = d => (
    d.replace(/(-?[\d]+)/g,v => {
      const i = parseInt(v);
      const n = rd(i, 20);
      if (Math.sign(i) === -1 && Math.sign(n) !== -1) {
        return ' ' + n;
      }
      return n;
    })
);

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
            'M0 304C0 304 '+ randomize('-15,349,89,387C188,423,153,539,228,576C294,609,257,746,477,741C708,736,649,575,756,559C860,545,836,419,897,396C958,374,996,280')+
            ' 1000 281V1000H0z'
            } style={{
                filter: `blur(${5 -Math.sin(i*Math.PI) * 5}px) drop-shadow(0 0 50px hsla(${hue}deg,100%,70%, 0.3))`, 
                fill: `url(#gradient-${i})`,
                transformOrigin: 'center',
                transform: `translate(${Math.round(Math.sin(i*Math.PI)*X_VARIANCE - X_VARIANCE / 2)}px,${Math.round(-(1-i)*Y_VARIANCE)}px) scale(${1+X_VARIANCE/1000+0.1}, ${1+Y_VARIANCE/1000+0.1})`
            }}/>
        </>
    );
}

const Background = () => {
    
    return (
        <div className="background">
        <svg className='mountains' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
            <path fill={`hsl(227deg,90%,50%)`} d='M0,0 L1000,0 L1000,1000 L0,1000 z'/>
            {[...new Array(LAYERS)].map((_, i) => (
            <Mountain index={i} hue={900} key={i}/>
            ))}
        </svg>
        </div>
    );
}

export default Background