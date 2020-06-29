import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { Panel } from './layout'
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
    </Routes>
  )
}