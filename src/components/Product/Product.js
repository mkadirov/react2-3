import React from 'react'
import getFoodListData from '../../data/FoodListData'
import { useParams } from 'react-router-dom'

export default function Product() {

    const params = useParams();
    const food = getFoodListData().filter(item => item.foodName === params.food)[0]
    

  return (
   
         <div className='row'>
           
             <div className="col-lg-3 col-md-8 col-sm-12 mb-4">
                <div className="rounded">
                    <img src={food.imgUrl} alt="" />
                 </div>
             </div>
                              
            <div className="col-lg-9 col-md-12 col-sm-12 mb-4 ">
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
}
