import React from 'react'
import './style.sass'
import c from 'classnames'
import { CardListItem } from 'utilits/cardList'

interface C {
  data: CardListItem,
  onClick: () => void,
}

const Card: React.FC<C> = ({data, onClick,}) => {
  // const timer = useRef<any>()-u

  return (
    <div
      style={
        data.isOpened
          ? { backgroundImage: `url('${data.img}')` }
          : { backgroundImage: `url('/images/CloseCard.jpg')` }
      }
      className={c('card', { closeCard: !data.isOpened })}
      onClick={onClick}
    ></div>
  )
}
export default Card
