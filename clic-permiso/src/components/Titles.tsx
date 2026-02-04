import React from 'react'

interface TitleProps {
  nombre: string
  onClick?: () => void
  isSelected?: boolean
}

export const Titles = ({ nombre, onClick, isSelected = false }: TitleProps) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        style={{
          padding: '10px',
          border: 'none',
          background: isSelected ? '#ddd' : 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left'
        }}
      >
        {nombre}
      </button>
    )
  }

  return <h1>{nombre}</h1>
}
