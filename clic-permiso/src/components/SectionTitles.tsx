import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Titles } from './Titles'
import SolDiaDiurno from './sections/SolDiaDiurno'
import SolDiaVespertino from './sections/SolDiaVespertino'
import MiPerfil from './sections/MiPerfil'
import MisDiasSolicitados from './sections/MisDiasSolicitados'
import MisAusencias from './sections/MisAusencias'

export default function SectionTitles() {
  const sections = [
    { label: 'Sol. dia diurno', path: '/sol-dia-diurno', element: <SolDiaDiurno /> },
    { label: 'Sol. dia vespertino', path: '/sol-dia-vespertino', element: <SolDiaVespertino /> },
    { label: 'Mi perfil', path: '/mi-perfil', element: <MiPerfil /> },
    { label: 'Mis dias solicitados', path: '/mis-dias-solicitados', element: <MisDiasSolicitados /> },
    { label: 'Mis ausencias', path: '/mis-ausencias', element: <MisAusencias /> }
  ]

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px' }}>
        {sections.map((section) => (
          <Titles key={section.path} nombre={section.label} to={section.path} />
        ))}
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <Routes>
          <Route path="/" element={<h2>Selecciona una seccion</h2>} />
          {sections.map((section) => (
            <Route key={section.path} path={section.path} element={section.element} />
          ))}
        </Routes>
      </div>
    </div>
  )
}
