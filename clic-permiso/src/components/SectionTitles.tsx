import React, { useState } from 'react'
import { Titles } from './Titles'

export default function SectionTitles() {
  const [selectedSection, setSelectedSection] = useState<string>('')

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <Titles 
          nombre='Sol. dia diurno' 
          onClick={() => setSelectedSection('Sol. dia diurno')}
          isSelected={selectedSection === 'Sol. dia diurno'}
        />
        <Titles 
          nombre='Sol. dia vespertino' 
          onClick={() => setSelectedSection('Sol. dia vespertino')}
          isSelected={selectedSection === 'Sol. dia vespertino'}
        />
        <Titles 
          nombre='Mi perfil' 
          onClick={() => setSelectedSection('Mi perfil')}
          isSelected={selectedSection === 'Mi perfil'}
        />
        <Titles 
          nombre='Mis dias solicitados' 
          onClick={() => setSelectedSection('Mis dias solicitados')}
          isSelected={selectedSection === 'Mis dias solicitados'}
        />
        <Titles 
          nombre='Mis ausencias' 
          onClick={() => setSelectedSection('Mis ausencias')}
          isSelected={selectedSection === 'Mis ausencias'}
        />
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {selectedSection && (
          <div>
            <h2>{selectedSection}</h2>
          </div>
        )}
      </div>
    </div>
  )
}
