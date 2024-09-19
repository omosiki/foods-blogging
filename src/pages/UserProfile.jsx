import React, { useState } from 'react'
import Avater from "../assets/avater3.webp"
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [avater, setAvater] = useState(Avater)
  const [name, setName] = useState( '')
  const [email, setEmail] = useState( '')
  const [currentPassword, setCurrentPassword ] = useState( '')
  const [newPassword, setNewPasword] = useState( '')
  const [confirmNewPassword, setConfirmNewPassword] = useState( '')
  return (
    <section className='profile'>
      <div className="container profile__container">
         <Link to={`/myposts/sdfsdf `} className='btn'>My posts</Link>
      

          <div className="profile__detail">
          <div className="avater__wrapper">
            <div className="profile__avater">
              <img src={avater} alt="" />
            </div>
            {/* from to update avater */}

            <form className="avater__form">
              <input type="file" name='avater' id='avater' />
              <label htmlFor="avater" id='avater' onChange={e => setAvater(e.target.files[0])} accept='png, jpg, jpeg'><FaEdit /></label>
            </form>
            {/* <button className='profile__avater-btn'><FaCheck /></button> */}
          </div>
          <h2>Zikrah</h2>
          <form className='form profile__form'>
            <p className='form__error-message'>This is an error message</p>
            <input type="text" placeholder='Full name' value={name} onChange={e=> setName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)}/>
            <input type="password" placeholder='current passowrd' value={currentPassword} onChange={e=> setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder='New Password' value={newPassword} onChange={e=> setNewPasword(e.target.value)}/>
            <input type="password" placeholder='Confirm New password' value={confirmNewPassword} onChange={e=> setConfirmNewPassword(e.target.value)}/>
              <button type='submit' className='btn  primary'>Update details</button>
             </form>
        </div>
      </div>
    
    </section>
  )
}

export default UserProfile
