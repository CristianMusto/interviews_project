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
      'text': 'cd desktop/professional_growth/Exploite_Interviews',
      'cmd': true 
    },
    {
      'text': 'open ',
      'cmd': false
    },
    {
      text: '✔ Loaded course',
      cmd: false,
      repeat: true,
      repeatCount: 5,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + ' Loading app',
          delay: 40
        }
      })
    },
    {
      'text': 'cd more',
      'cmd': true
    },
    {
        'text': 'fahsdfhadkfjhadslkfjad',
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