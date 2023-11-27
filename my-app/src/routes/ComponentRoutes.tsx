import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NestedFolderPage from '../pages/NestedFolderPage'

const ComponentRoute = () => {
  return (
   <>
   <Routes>
    <Route index path="/"  element={<HomePage/>}/>
    {/* <Route path="/:folderIds*" element={<NestedFolderPage/>} /> */}
    <Route path="/:id" element={<NestedFolderPage />} />

   </Routes>
   </>
  )
}

export default ComponentRoute