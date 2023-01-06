import Terminal from 'react-animated-term';
import "./Terminal.scss"

const TerminalComp = () => {

    const termLines = [
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

export default TerminalComp