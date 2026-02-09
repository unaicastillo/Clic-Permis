import React from 'react'
import SectionTitles from './components/SectionTitles'
import { Header } from './components/Header'

export default function App() {
    return (
        <div style={{ background: 'white', minHeight: '100vh' }}>
            <Header />
            <SectionTitles />
        </div>
    )
}
