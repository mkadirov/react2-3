import React, {Children, useState} from 'react'
import { Link, createRoutesFromChildren } from 'react-router-dom'
import WelcomeStyle from './WelcomeStyle'
import logo from '../../assets/image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChartColumn, faCheck, faPizzaSlice, faPlus, faSpinner, faUserCircle, faUserFriends } from '@fortawesome/free-solid-svg-icons'

export default function Welcome( {children} ) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(5);

 
  

  return (
    <WelcomeStyle>
      <aside className={`py-2 px-2 shadow ${show && "hide"}`}>
         <Link to="/">
         <div className="row justify-content-center">
            <div className="col-9">
               <img src={logo} alt="" />
            </div>
          </div>
         </Link>
          <div className="list-box mt-5">
            <Link to='/orders'> <div className={`link-item row mx-3 rounded ${active=== 0 ? 'primeColor': ''}`} onClick={() => setActive(0)}>
              <div className="col-2 d-flex justify-content-center align-items-center icon-box">
                <FontAwesomeIcon icon={faSpinner}/>
              </div>
              <div className="col-10">
                <p className='fw-bolder'>Arizalar</p>
                <span className='light-dark display-10'>Yetib kelgan arizalarni kuzatish mumkin</span>
              </div>
            </div></Link>
           

           <Link to="/delivered">
           <div className={`link-item row mx-3 rounded `} onClick={() => setActive(1)}>
              <div className="col-2 d-flex justify-content-center align-items-center icon-box">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <div className="col-10">
                <p className='fw-bolder'>Yetkazilgan</p>
                <span className='light-dark display-10'>Yetkazilgan taomlar ro'xati bilan tanishing</span>
              </div>
            </div></Link>

            <div className={`link-item row mx-3 rounded `} onClick={() => setActive(2)}>
              <div className="col-2 d-flex justify-content-center align-items-center icon-box">
                <FontAwesomeIcon icon={faChartColumn}/>
              </div>
              <div className="col-10">
                <p className='fw-bolder'>Statistika</p>
                <span className='light-dark display-10'>Diogrammalar bilan ishlangan statistika</span>
              </div>
            </div>

           <Link to="/add">
           <div className={`link-item row mx-3 rounded `} onClick={() => setActive(3)}>
              <div className="col-2 d-flex justify-content-center align-items-center icon-box">
                <FontAwesomeIcon icon={faPlus}/>
              </div>
              <div className="col-10">
                <p className='fw-bolder'>Qo'shish</p>
                <span className='light-dark display-10'>Yangi kategoriy/taom qo'shish</span>
              </div>
            </div></Link>


            <Link to="/users">
            <div className={`link-item row mx-3 rounded `} onClick={() => setActive(4)}>
              <div className="col-2 d-flex justify-content-center align-items-center icon-box">
                <FontAwesomeIcon icon={faUserFriends}/>
              </div>
              <div className="col-10">
                <p className='fw-bolder'>Foydalanuvchilar</p>
                <span className='light-dark display-10'>Rollarni briktirishingiz mumkin</span>
              </div>
            </div></Link>

            <Link to="/foods">
            <div className={`link-item row mx-3 rounded`} onClick={() => setActive(5)}>
              <div className="col-2 d-flex justify-content-center align-items-center icon-box">
                <FontAwesomeIcon icon={faPizzaSlice}/>
              </div>
              <div className="col-10">
                <p className='fw-bolder'>Taomlar</p>
                <span className='light-dark display-10'>Mavjud taomlar röyxati</span>
              </div>
            </div></Link>


          </div>
        </aside>
        <div className="rightSide ">
            <header className='shadow-sm'>
              <div className="container-fluid d-flex justify-content-between align-items-center py-3">
                <div className="menu-bar px-2" onClick={()=> setShow(!show)}>
                  <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className="user-box d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faUserCircle}/>
                  <p className='m-0'>Axror</p>
                </div>
              </div>
            </header>
            <main>{children}</main>
        </div>
    </WelcomeStyle>
  )
}
