import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { Panel } from './layout'
import { Login } from './view'
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/panel" element={<Panel />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}