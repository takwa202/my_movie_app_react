import React from 'react'
import Modal from 'react-modal';
import {useState} from 'react';
import { Rating } from 'react-simple-star-rating'
import { v4 as uuidv4 } from 'uuid';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
  
const AddMovies = ({handelAdd}) => {
    //************************ */
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    //******************************************************** */
    const submit = (e) => {
        e.preventDefault();
        handelAdd({...form,rating:rating,id: uuidv4()} );
        setform( {
            title:'',
            url:'',
            description:''

        });
        closeModal();
    }
    const [form, setform] = useState(
        {
            title:'',
            url:'',
            description:''

        }
    )
    const onchange = (e) => {
        setform({...form,[e.target.name]:e.target.value})
    } 
    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
    
    return (
      <div>
        <button className='myButton' onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         
         
         
          <form onSubmit={submit} >
          <p> title</p>
            <input type='text' onChange={onchange} name='title' required />
            <p> description</p>
            <input type='text'  onChange={onchange} name=' description'  required/>
            <p> picture</p>
            <input type='url'  onChange={onchange} name='url'  required />
            <Rating onClick={handleRating} ratingValue={rating}/* Available Props */  style={{margin:'20px'}} />
           <button  style={{margin:'10px'}}  >submit</button>
           <button  style={{margin:'10px'}}  onClick={closeModal}>close</button>
            </form>
        </Modal>
      </div>
  )
}

export default AddMovies