import Terminal from 'react-animated-term';
import "./Terminal.scss"

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
  const dateString = CurrentDate();
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const termLines = [
    {
      'text': `login: ${dateString}`,
      'cmd': false
    },
    {
      'text': 'cd desktop/professional_growth/Exploit_Interviews',
      'cmd': true 
    },
    {
      text: '✔ Loaded course',
      cmd: false,
      repeat: true,
      repeatCount: 5,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + ' Loading course',
          delay: 30
        }
      })
    },
    {
      'text': 'cd more',
      'cmd': true
    },
    {
        'text': 'DAJE!',
        'cmd': false
    }
  ]
  
  return (
    <Terminal
      lines={termLines}
      interval={80}
    />
  )
}

export default TerminalComp;