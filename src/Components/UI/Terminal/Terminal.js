import Terminal from 'react-animated-term';
import "./Terminal.scss"
import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const date = new Date();
  return date.toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
}

const TerminalComp = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const dateString = CurrentDate();
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const termLines = [
    {
      'text': `Login: ${dateString}`,
      'cmd': false
    },
    {
      'text': 'cd Exploit_Interviews',
      'cmd': true 
    },
    {
      text: '✔ Loaded',
      cmd: false,
      repeat: true,
      repeatCount: 5,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + ' Loading',
          delay: 10
        }
      })
    },
    {
      'text': 'cat intro.txt',
      'cmd': true 
    },
    {
      'text': 'Nostrud ipsum cillum enim esse cupidatat qui pariatur ex duis laboris laboris laborum.',
      'cmd': false
    },
    {
        'text': 'cat subtitle.txt',
        'cmd': true
    },
    {
      'text': 'Nostrud ipsum cillum enim esse cupidatat qui pariatur ex duis laboris laboris laborum.',
      'cmd': false
    }
  ]

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 6000);
  }, [])
  
  return (
    <>
      {isDisplayed && <Terminal lines={termLines} interval={90} className="terminal"/>}
    </>
  )
}

export default TerminalComp;