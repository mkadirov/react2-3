import React, { useState } from 'react'
import { dispatch } from '../../redux/store';


export default function Category() {
  const [inputText, setInputText] = useState('')

  function changeInputText(event) {
    setInputText(event.target.value);
  }

  function addCategory() {
    if(inputText.trim() !== ""){
      dispatch({type: 'ADD_NEW_CATEGORY', payload: inputText})
      setInputText('');
      alert(inputText + " kategoriyasi qo'shildi")
    }else{
        alert("Bösh matin qöshish mumkin emas")
    }
  }


  return (
    <>
        <div className="input-box">
            <div className="row">
                <div className="col-9 text-center">
                <input type="text" value={inputText}  className="form-control border-dark d-block" 
                        onChange={changeInputText} />
                <button className="btn btn-prime px-5 mt-5" onClick={addCategory}>Qo'shish</button>
                </div>
            </div>
        </div>
    </>
  )
}
