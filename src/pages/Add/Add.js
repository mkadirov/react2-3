import React, { useState } from 'react'
import AddStyle from './AddStyle'
import Welcome from '../Welcome/Welcome'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Add() {
    const [active, setActive] = useState(0)
  return (
   <>
     <AddStyle>
       <div className="container pt-5">
         <header>
            <h2 className="fw-bold">Qo'shish</h2>
            <p className="light-dark">Yangi kategoriya/taom qo'shish</p>
            <div className="btn-box mt-5">
            <NavLink to="category" style={({isActive}) => isActive? {backgroundColor: "#FFEC00"} : {}} 
            className='btn fw-bold me-2 shadow px-5'  onClick={()=> setActive(0)}>
            Kategoriya
            </NavLink>
            <NavLink to="food" style={({isActive}) => isActive? {backgroundColor: "#FFEC00"} : {}} 
            className='btn fw-bold me-2 px-5  shadow'  onClick={()=> setActive(1)}>
            Taom
            </NavLink>
            </div>
         </header>
         <main className='mt-5'>
            <Outlet/>
         </main>
       </div>
    </AddStyle>
   </>
  )
}
