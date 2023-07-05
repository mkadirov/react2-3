import React from 'react'
import logo from "../../assets/image/logo.png"
import HomeStyle from './HomeStyle'
import { Link, useNavigate } from 'react-router-dom'



export default function HomePage(props) {

    const navigate = useNavigate();

  return (
    
    <HomeStyle>
        <div className="container">
           <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 ">

                <div className="row d-flex justify-content-center ">
                    <div className="col-lg-4 col-md-6 col-sm-6 my-3">
                     <img src={logo} alt="" />
                    </div>
                </div>

                <input type="text" className="form-control my-3" placeholder='Username'/>
                <input type="text" className="form-control my-3" placeholder='Password' />
                <p className="text-end fw-bold">
                    Parolni unuttingitmi?
                </p>
                <div className='btn btn-prime d-block' onClick={() => {
                    props.setLogin(true)
                    navigate("dashbord")
                }}>Kirish</div>
                <div className="row mt-3">
                    <div className="col-5"><span></span></div>
                    <div className="col-2 text-center light-dark">Yoki</div>
                    <div className="col-5"><span></span></div>
                </div>
                 <p className="text-center fw-bold mt-3">Röyxatdan ötish</p>
                 <p className="text-center fw-bold mt-3">Qoidalar</p>
            </div>
           </div>
        </div>
    </HomeStyle>
  )
}
