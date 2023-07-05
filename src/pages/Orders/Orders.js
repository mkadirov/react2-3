import React from 'react'
import OrdersStyle from './OrdersStyle'
import Welcome from '../Welcome/Welcome'
import getOrderList from '../../data/Orderlist'
import { Link, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Product from '../../components/Product/Product';

export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const list = getOrderList();
  let sum=0;
  return (
    <>
        <OrdersStyle>
        <div className="container">
            <h2 className="pt-5">
                Arizalar
            </h2>
            <p className="light-dark">Yetib kelgan arizalarni kuzatishingiz mumkin</p>

            <div className="search-box my-3 py-3">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-12">
                <input type="text" className="form-control" placeholder='Taom nomi böyicha qidirish...' 
                     value={searchParams.get('filter')} onChange={(e) => {
                      const filter = e.target.value;
                      if(filter) setSearchParams({filter : filter})
                      else setSearchParams({})
                     }} />
                </div>
              </div>
            </div>

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
                  list.filter(item => {
                    const filter = searchParams.get('filter');
                    if(!filter) return true
                    else return item.foodName.toLowerCase().includes(filter)
                  }).map((item, index)=> {
                    const price = item.price * item.quantity
                    sum+=price
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.user}</td>
                        <td>
                          <Link to={item.foodName+location.search}>{item.foodName}</Link>
                        </td>
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

            <div className="mt-5 py-5">
            <Routes>
              <Route 
                path=':food'
                element = {<Product />}
              />
            </Routes>
            </div>
        </div>
      </OrdersStyle>
    </>
  )
}
