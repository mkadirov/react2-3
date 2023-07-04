import React from 'react'
import OrdersStyle from './OrdersStyle'
import Welcome from '../Welcome/Welcome'
import getOrderList from '../../data/Orderlist'

export default function Orders() {

  const list = getOrderList();
  let sum=0;
  return (
    <Welcome>
        <OrdersStyle>
        <div className="container">
            <h2 className="pt-5">
                Arizalar
            </h2>
            <p className="light-dark">Yetib kelgan arizalarni kuzatishingiz mumkin</p>

            <table className="table mt-5">
              <thead>
                <th>#</th>
                <th>Yodalanuvchi</th>
                <th>Taom</th>
                <th>Narxi</th>
                <th>Soni</th>
                <th>Summa</th>
                <th>Telefon</th>
                <th>Izoh</th>
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
                        <td>{item.description}</td>
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
      </OrdersStyle>
    </Welcome>
  )
}
