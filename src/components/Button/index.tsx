import React from "react";
import c from 'classnames'
import s from './style.module.sass'

interface button {
  placeholder: string,
  onClick: () => void,
}

const Button: React.FC<button> = ({onClick, placeholder}) => {
  return(
    <button className={c(s.start)} onClick={onClick}>{placeholder}</button>
  )
}

export default Button