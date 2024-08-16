import React from 'react'
import * as buttonStyles from './Buttons.module.css'

export default function Buttons({onSubmit, type, onClick, text}) {
  return (
    <button onClick={onClick} onSubmit={onSubmit} className={
        [
            buttonStyles.button, type==='primary'? 
                buttonStyles.primaryButton
            : type==='danger'?
                buttonStyles.dangerButton 
            : type==='success'?
                buttonStyles.successButton
            : ''
        ].join(" ")
    }>
        {text}
    </button>
  )
}
