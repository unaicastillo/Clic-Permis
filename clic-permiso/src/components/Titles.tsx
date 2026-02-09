import React from 'react'
import { NavLink } from 'react-router-dom'

interface TitleProps {
  nombre: string
  to?: string
}

export const Titles = ({ nombre, to }: TitleProps) => {
  if (to) {
    return (
      <NavLink
        to={to}
        style={({ isActive }) => ({
          display: 'block',
          padding: '10px',
          border: 'none',
          background: isActive ? '#e6e6e6' : 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
          textDecoration: 'none',
          color: isActive ? '#111' : 'inherit',
          fontWeight: isActive ? 600 : 400,
          borderLeft: isActive ? '4px solid #111' : '4px solid transparent'
        })}
      >
        {nombre}
      </NavLink>
    )
  }

  return <h1>{nombre}</h1>
}
