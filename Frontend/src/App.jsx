import React from 'react'
import Layout from './Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import CaseStudy from './components/CaseStudy'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/caseStudy/:projectId' element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App

