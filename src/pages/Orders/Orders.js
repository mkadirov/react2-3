import React, { useRef, useState } from 'react'
import OrdersStyle from './OrdersStyle'
import { Link, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {useSelector } from 'react-redux'
import { dispatch } from '../../redux/store';
import { DELETE_ORDER, EDIT_ORDER } from '../../redux/types';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import getFoodListData from '../../data/FoodListData';


export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const state = useSelector(state => state);
  const [modalShow, setModalShow] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});
  const [tempFood, setTempFood] = useState('');
  const [tempPrice, setTempPrice] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);


  let foods = getFoodListData();


  const foodRef = useRef(null);
  const numRef = useRef(null);
  const telRef = useRef(null);
  const discRef = useRef(null);
  const priceRef = useRef(null)

  function editOrder(e) {

    e.preventDefault();

    const foodName = foodRef.current.value;
    const quantity = numRef.current.value;
    const tel = telRef.current.value;
    const description = discRef.current.value;
    const price = priceRef.current.value;

    const order = {
      user: currentOrder.user,
      foodName: foodName,
      price: price,
      quantity: quantity,
      tel: tel,
      description: description
    }

    dispatch({type: EDIT_ORDER, payload: {index: currentIndex, order}});

    

    foodRef.current.value  = "";
    numRef.current.value = "";
    telRef.current.value = "";
    discRef.current.value = "";
    priceRef.current.value = "";

    setModalShow(false)
  }
  

  function deleteOrder(index){
    dispatch({type: DELETE_ORDER, payload: index})
  }

  function openModal(index, item) {
    setModalShow(true);
    setCurrentOrder(item);
    setTempFood(item.foodName);
    setTempPrice(item.price);
    setCurrentIndex(index);
  }

  


  function MyVerticallyCenteredModal(props) {
    const [modalFood, setModalFood] = useState(tempFood);
    const [modalPrice, setModalPrice] = useState(tempPrice);
    const [modalNum, setModalNum] = useState(currentOrder.quantity)
    const [modalTel, setModalTel] = useState(currentOrder.tel);
    const [modalDisc, setModalDisc] = useState(currentOrder.description);
    

    function editTempFood(e) {
      e.preventDefault();
      let f = e.target.value
      setModalFood(f);
  
      foods.map(item => {
        if(item.foodName === f)  return setModalPrice(item.price)
      })
  
    }
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          


          <h3 className="text-center mb-5">
            Buyurtmani özgartirish
          </h3>

          <Form>
          <Form.Label>Foydalanuvchi:</Form.Label>
           <h4 className="fw-bold">{currentOrder.user}</h4>

          <div className="food-name">
          <Form.Label>Taom nomi</Form.Label>
          <Form.Select aria-label="Default select example" className=" mb-2"   value={modalFood}  onChange={(e) => editTempFood(e)} ref={foodRef} >
              {
                foods.map((item, index) => {
                  return(
                    <option key={index + item.foodName} value={item.foodName}>{item.foodName}</option>
                  )
                })
              }
          </Form.Select>
          </div>
          <Form.Label>Taom narxi</Form.Label>
           <input className='form-control' type="text" value={modalPrice} readOnly disabled ref={priceRef}/>

           <Form.Label>Soni</Form.Label>
           <input className='form-control' type="text" value={modalNum}  onChange={(e) => setModalNum(e.target.value)} ref={numRef}/>

           <Form.Label>Telefon raqami</Form.Label>
           <input className='form-control' type="text" value={modalTel} onChange={(e)=> setModalTel(e.target.value)} ref={telRef}/>

           <Form.Label>Izoh</Form.Label>
           <input className='form-control' type="text" value={modalDisc} onChange={(e) => setModalDisc(e.target.value)} ref={discRef}/>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger fw-bold px-5' onClick={props.onHide}>Close</button>
          <button className='btn btn-prime px-5' onClick={editOrder}>Edit</button>
        </Modal.Footer>
      </Modal>
    );
  }

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
                <th>Özgartirish</th>
              </thead>
              <tbody>
                {
                  state.order.orderList.filter(item1 => {
                    const filter = searchParams.get('filter');
                    if(!filter) return true
                    else return item1.foodName.toLowerCase().includes(filter)
                  }).map((item, index)=> {
                    const price = item.price * item.quantity
                    sum+=price
                    return(
                      <tr key={index + item.user}>
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
                        <td>
                          <div className="button-box">
                            <button className="btn btn-warning me-2" onClick={() => openModal(index, item)}>
                               <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button className="btn btn-danger" onClick={()=> deleteOrder(index)}>
                               <FontAwesomeIcon icon={faTrash}/>
                            </button>
                          </div>
                        </td>
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
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
      </OrdersStyle>

      
    </>
  )


 
}
