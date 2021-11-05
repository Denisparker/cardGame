import Card from 'components/Card'
import React, { useEffect, useState } from 'react'
import cardsList from 'utilits/cardList'

interface cardList {
  started: boolean
}

const CardList: React.FC<cardList> = ({ started }) => {
  const [list, setList] = useState(cardsList)

  useEffect(() => {
    if (!started) {
      setList(
        list.map((obj) => {
          if (obj.isOpened) {
            return { ...obj, isOpened: false }
          }
          return obj
        })
      )
      setTimeout(() => {
        setList(cardsList.sort(() => Math.round(Math.random() * 100) - 50))
      }, 1000)
    }
  }, [started])

  const [opened, setOpened] = useState<Array<any>>([])

  useEffect(() => {
    if (opened.length === 2) {
      if (opened[0].id === opened[1].id) {
        setOpened([])
      } else {
        if (opened[0].value === opened[1].value) {
          // console.log(list)
          setList(
            list.map((obj) => {
              if (obj.value == opened[0].value) {
                return { ...obj, completed: true }
              }
              return obj
            })
          )
          setTimeout(() => {
            setOpened([])
          }, 500)
        } else {
          setTimeout(() => {
            setList(
              list.map((obj) => {
                if (obj.completed) {
                  return obj
                }
                if (obj.isOpened) {
                  return { ...obj, isOpened: false }
                }
                return obj
              })
            )
            setOpened([])
          }, 1800)
        }
      }
    }
  }, [opened])

  const [clickable, setClickable] = useState(true)

  const handleClick = (id: number) => {
    if (started) {
      if (opened.length !== 2) {
        setList(
          list.map((obj) => {
            if (obj.completed) {
              return obj
            }
            if (obj.id == id) {
              setOpened([...opened, obj])
              if (clickable) {
                setClickable(false)
                setTimeout(() => {
                  setClickable(true)
                }, 500)
                return { ...obj, isOpened: !obj.isOpened }
              }
            }
            return obj
          })
        )
      }
    }
  }

  return (
    <>
      {list.map((obj) => {
        return (
          <Card key={obj.id} data={obj} onClick={() => handleClick(obj.id)} />
        )
      })}
    </>
  )
}

export default CardList
