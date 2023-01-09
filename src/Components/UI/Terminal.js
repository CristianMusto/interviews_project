import Terminal from 'react-animated-term';
import "./Terminal.scss"

//const  spinner  =  [ '⠋' ,  '⠙' ,  '⠹' ,  '⠸' ,  '⠼' ,  '⠴' ,  '⠦' ,  '⠧ ' ,  '⠇' ,  '⠏' ]

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
  const termLines = [
    {
      'text': `login: ${dateString}`,
      'cmd': false
    },
    {
      'text': 'cd Exploite_Interviews',
      'cmd': true 
    },
    {
      'text': 'hfdjasdhflakjdhslafjkhd',
      'cmd': false
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
        interval={100}
      />
  )
}

export default TerminalComp;