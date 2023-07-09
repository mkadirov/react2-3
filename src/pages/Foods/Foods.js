import React from 'react'
import FoodsStyle from './FoodsStyle'
import { useSearchParams } from 'react-router-dom'
import {useSelector } from 'react-redux'

export default function Foods() {
 const [searchParams, setSearchParams] = useSearchParams();
 const state = useSelector(state => state);


  return (
    <>
        <FoodsStyle>
            <div className="container py-5">
               <h2 className="fw-bold">Taomlar</h2>
                <p className="light-dark">Mavjud taomlar röyxatini körishingiz mumkin</p>

                <div className="row d-flex justify-content-center ">
                    <div className="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" className="form-control my-5" placeholder='Search...'  value={searchParams.get('filter')} onChange={(e) => 
                        
                         {
                            const filter = e.target.value;
                            if(filter) setSearchParams({filter: filter})
                            else setSearchParams({})
                         }
                          }/>
                        
                      
                    </div>
                </div>
                <div className="food-box mt-5">
                    
                        
                        {
                        state.food.foodList.filter((item) => {
                            const filter = searchParams.get('filter')
                            if(!filter) return true
                            else return item.foodName.toLowerCase().includes(filter)
                        }).map(food => {
                            return (
                                
                               <div className='row' key={food.imgUrl}>
                                 <div className="col-lg-3 col-md-8 col-sm-12 mb-4">
                                  <div className="img-box rounded">
                                    <img src={food.imgUrl} alt="" />
                                   </div>
                                     </div>
                              
                                     <div className="col-lg-9 col-md-12 col-sm-12 mb-4 info-box">
                                      <div>
                                     <h3>{food.foodName}</h3>
                                     <h4 className='light-dark'>{`Kategoriya: ${food.category}`}</h4>
                                      <p className="light-dark">
                                      {`Tarif: ${food.description}`}
                                       </p>
                                     </div>
                                     <p className="text-warning">{`Narxi: ${food.price} so'm`}</p>
                                    </div>
                               </div>
                              
                            )
                        })
                       }
                        
                       
                    
                </div>
            </div>
        </FoodsStyle>
    </>
  )
}
