import React from 'react'
import logo from '../../assets/image/logo.png'
import Welcome from '../Welcome/Welcome'
import BiglogoStyle from './BiglogoStyle'

export default function Biglogo() {
  return (
   <Welcome>
    <BiglogoStyle>
    <div className="row mx-5 my-5 py-5 justify-content-center align-items-center">
        <div className="col-4" logo-box>
            <img src={logo} alt="" />
        </div>
     </div>
    </BiglogoStyle>
   </Welcome>
  )
}
