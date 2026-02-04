import React from 'react'
import SectionTitles from './components/SectionTitles'
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

export default function App() {
    return (
        <div style={{ background: 'white', minHeight: '100vh' }}>
            <BrowserRouter>
                <Header/>
                <SectionTitles />
            </BrowserRouter>
        </div>
    )
}
