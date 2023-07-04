import React, { useState } from 'react'
import AddStyle from './AddStyle'
import Welcome from '../Welcome/Welcome'
import { Link } from 'react-router-dom'

export default function Add({children}) {
    const [active, setActive] = useState(0)
  return (
   <Welcome>
     <AddStyle>
       <div className="container pt-5">
         <header>
            <h2 className="fw-bold">Qo'shish</h2>
            <p className="light-dark">Yangi kategoriya/taom qo'shish</p>
            <div className="btn-box mt-5">
            <Link to="/add/category">
            <button className='btn fw-bold me-2 btn-prime shadow'  onClick={()=> setActive(0)}>Kategoriya</button></Link>
            <Link to="/add/food">
            <button className='btn fw-bold me-2 btn-prime shadow'  onClick={()=> setActive(1)}>Taom</button></Link>
            </div>
         </header>
         <main className='mt-5'>{children}</main>
       </div>
    </AddStyle>
   </Welcome>
  )
}
