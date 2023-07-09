import React from 'react'
import Nav from "../Nav";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className='contact__container'>
      
      <div className='contact-content__container'>
        <div className='contactimage__container'>
          <img src='../public/Images/contactimage.jpg' className='contactimage' alt='pasta'/>
        </div>
        <div className='data__container'>
          <div className='contact-text__container'>
            <p className='contact-text'>CONTACT US</p>
          </div>
          <div className='form__container'>
            <form className='form'>
              <label  className='label'>FULL NAME</label>
              <input  type='text' className='input' name="name" placeholder='Enter full name...'/>
              <label  className='label'>EMAIL</label>
              <input  type='email' className='input' name="email" placeholder='enter email'/>
              <label  className='label' >MESSSAGE</label>
              <textarea rows={5} cols={30} className='input' placeholder='Enter message'></textarea>
            </form>
            
              <button className='sendmessage-btn'>Send Message</button>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
