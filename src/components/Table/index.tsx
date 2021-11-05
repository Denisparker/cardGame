import React, { useState } from 'react'
import c from 'classnames'
import s from './style.module.sass'
import CardList from 'components/CardList'
import Button from 'components/Button'

const Table: React.FC = () => {
  const [started, setStarted] = useState(false)
  const [text, setText] = useState('Start')

  const handler = () => {
    started ? setText('Start') : setText('Stop')
    setStarted(!started)
  }

  return (
    <div className={c(s.table)}>
      <div className={c(s.cards)}>
        <CardList started={started} />
      </div>
      <div className={c(s.menu)}>
        <Button onClick={() => handler()} placeholder={text}/>
      </div>
    </div>
  )
}

export default Table
