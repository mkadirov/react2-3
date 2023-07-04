import React, { useState } from 'react'
import Add from '../Add/Add'

export default function Category({categoryList, changeList}) {
  const [inputText, setInputText] = useState('')

  function changeInputText(event) {
    setInputText(event.target.value);
  }

  function changeState() {
    if(inputText.trim() !== ""){
      changeList(inputText);
      setInputText('');
      alert(inputText + " kategoriyasi qo'shildi")
    }else{
        alert("Bösh matin qöshish mumkin emas")
    }
  }


  return (
    <Add>
        <div className="input-box">
            <div className="row">
                <div className="col-9 text-center">
                <input type="text" value={inputText}  className="form-control border-dark d-block" 
                        onChange={changeInputText} />
                <button className="btn btn-prime px-5 mt-5" onClick={changeState}>Qo'shish</button>
                </div>
            </div>
        </div>
    </Add>
  )
}
