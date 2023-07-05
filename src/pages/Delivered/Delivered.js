import React from 'react'
import Welcome from '../Welcome/Welcome'
import getOrderList from '../../data/Orderlist'

export default function Deliverd() {

  const list = getOrderList();
  let sum=0;
  return (
    <>
        
        <div className="container">
            <h2 className="pt-5">
                Yetkazilgan buyurtmalar
            </h2>
            <p className="light-dark">Yetkazilgan buyurtmalarni kuzatishingiz mumkin</p>

            <table className="table mt-5">
              <thead>
                <th>#</th>
                <th>Yodalanuvchi</th>
                <th>Taom</th>
                <th>Narxi</th>
                <th>Soni</th>
                <th>Summa</th>
                <th>Telefon</th>
                <th>Status</th>
              </thead>
              <tbody>
                {
                  list.map((item, index)=> {
                    const price = item.price * item.quantity
                    sum+=price
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.user}</td>
                        <td>{item.foodName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{price}</td>
                        <td>{item.tel}</td>
                        <td>yetkazildi</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

            <div className="sum-box d-flex justify-content-between pe-5">
              <p className="fw-bold">Jami</p>
              <p className="fw-bold ">{sum} so'm</p>
            </div>
        </div>
    
    </>
  )
}
