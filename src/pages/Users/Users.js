import React, {useState, useRef} from 'react'
import Welcome from '../Welcome/Welcome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Users({users, setUsers}) {
    const [modalShow, setModalShow] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const inputRef = useRef(null)

    function deleteUser(user) {
        const newUsers = users.filter(item => item !== user);
        setUsers(newUsers);
    }

    function editUser(e) {
        e.preventDefault();

        const newRoll = inputRef.current.value
        users.map(user => {
            if(user === currentUser){
                user.roll = newRoll;
            }
            return user;
        })
        setModalShow(false)
        setUsers(users);
    }


  return (
    <>
        <div className="container">
            <h2 className="pt-5">
               Foydalanuvchilar
            </h2>
            <p className="light-dark">Foydalanuvchilar rolini belgilashingiz mumkin mumkin</p>

            <table className="table mt-5">
              <thead>
                <th>#</th>
                <th>Yodalanuvchi</th>
                <th>Telefon raqami</th>
                <th>Roli</th>
                <th>Action</th>
              </thead>
              <tbody>
                {
                  users.map((item, index)=> {
                    
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.user}</td>
                        <td>{item.tel}</td>
                        <td>{item.roll}</td>
                        <td>
                            
                            <Button variant="warning me-2" onClick={() =>
                                 setModalShow(true)}>
                            <FontAwesomeIcon icon={faPen} onClick={()=> setCurrentUser(item)}/>
                            </Button>
                            <button className="btn btn-danger" onClick={()=> deleteUser(item)}>
                            <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

            <div className="sum-box d-flex justify-content-between pe-5">
              <p className="fw-bold">Jami</p>
              <p className="fw-bold me-5">{users.length} ta foydalanuvchi</p>
            </div>
        </div>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
    </>
  )

  function MyVerticallyCenteredModal(props) {
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
            Foydalanuvchilar uchun rol tanlang
          </h3>

          <Form.Select aria-label="Default select example" className=" mb-5"  ref={inputRef}>
              <option ></option>
              <option value="admin">Admin</option>
              <option value="yetkazuvchi">Yetkazuvchi</option>
              <option value="foydalanuvchi">Foydalanuvchi</option>
            </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger fw-bold px-5' onClick={props.onHide}>Close</button>
          <button className='btn btn-prime px-5' onClick={editUser}>Edit</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

