import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

function Router() {
  return (
    <>
    <Routes>
        <Route index element={<HomePage />}/>
    </Routes>
    </>
  )
}

export default Router