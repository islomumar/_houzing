import React from 'react'
import { navbar } from '../utils/navbar'
import Navbar from '../components/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {
            navbar?.map(({ path, element, id }) => {
              return <Route key={id()} path={path} element={element} />
            })
          }
        </Route>
        <Route path="*" element={<h1>404 Not found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Root