import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LessonsPage from '../pages/LessonsPage'

function Router() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/lessons' element={<LessonsPage />} />
      </Routes>
    </>
  )
}

export default Router
