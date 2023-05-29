import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/poroperties" element={<h1>poroperties</h1>} />
        <Route path="*" element={<h1>404 Not found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root