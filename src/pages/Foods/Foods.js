import React from 'react'
import Welcome from '../Welcome/Welcome'
import FoodsStyle from './FoodsStyle'

export default function Foods({foodList}) {
  return (
    <Welcome>
        <FoodsStyle>
            <div className="container py-5">
               <h2 className="fw-bold">Taomlar</h2>
                <p className="light-dark">Mavjud taomlar röyxatini körishingiz mumkin</p>
                <div className="food-box mt-5">
                    
                        
                        {
                        foodList.map(food => {
                            return (
                                
                               <div className='row'>
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
    </Welcome>
  )
}
