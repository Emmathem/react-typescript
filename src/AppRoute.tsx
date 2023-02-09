import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginIndex from './views/Login'

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginIndex />} />
    </Routes>
  )
}

export default AppRoute