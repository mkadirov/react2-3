import React, { useRef } from 'react'
import Add from '../Add/Add'
import FoodStyle from './FoodStyle'

export default function Food({categoryList, foodList, setFoodList}) {
    
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    
    function addFood(e) {
        e.preventDefault();
        const imgUrl = input1Ref.current.value;
        const foodName = input2Ref.current.value;
        const description = input3Ref.current.value;
        const price = input4Ref.current.value;
        const category = input5Ref.current.value;

        const food = {
            imgUrl: imgUrl,
            foodName: foodName,
            description: description,
            price: price,
            category: category 
        }
        

        setFoodList([...foodList, food])

        alert(foodName + "- tamnomaga qöshildi!")

        input1Ref.current.value = '';
        input2Ref.current.value = '';
        input3Ref.current.value = '';
        input4Ref.current.value = '';
        input5Ref.current.value = '';
    }
  return (
   <>
     <FoodStyle>
     <form className="form-container" onSubmit={addFood}>
       <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12 text-center">
        <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
                <input type="text" className="form-control border-dark" placeholder="Rasmga yo'l"  ref={input1Ref}/>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
                <input type="text" className="form-control border-dark"placeholder="Taom nomi"  ref={input2Ref}/>
            </div>
            <div className="col-12 mb-4 span-2 large-input-box">
                <input type="text" className="form-control border-dark large-input" placeholder="Tarif" ref={input3Ref}/>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
                <input type="text" className="form-control border-dark" placeholder="Narxi" ref={input4Ref}/>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
            <select className="form-select border-dark" aria-label="Default select example" ref={input5Ref}>
               <option selected>Open this select menu</option>

               {
                categoryList.map((item)=> {
                    return(
                        <option value={item}>{item}</option>
                    )
                })
               }
            </select>
            </div>
            
        </div>
        <button className="btn btn-prime text-center px-5" type='submit'>Qo'shish</button>
        </div>
       </div>
     </form>
     </FoodStyle>
   </>
  )
}
