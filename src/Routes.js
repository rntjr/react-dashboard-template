import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { Main } from './layout'
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}