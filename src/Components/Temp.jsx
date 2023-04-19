import React from 'react'
import 'animate.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function Temp({box}) {
  
    // const [show,setshow]=useState(false);
  return (
    <div>
      <SwitchTransition>
        <CSSTransition
        key={box}
        timeout={700}
        classNames={{
          enter: 'a',
          enterActive: 'animate__fadeInRight',
          enterDone: 'a',
          exit: 'a',
          exitActive: 'animate__fadeOutLeft',
          exitDone: 'a',
         }}
        >
        
         
          <div className='animate__animated' key={i}>{a}</div>
        </CSSTransition>
      </SwitchTransition>
            
    </div>
  )
}

export default Temp