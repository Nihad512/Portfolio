import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../Images/Me.jpeg';
function AboutMe() {
  return (
    <div className='flex direction_row justify_center AboutMe'>
        <span className='Full_picture'>
            <img className='full_width full_height' src={Me}alt=""  />
        </span>
        <span className='flex direction_column About'>
        <p>Front-End developer</p>
        <h1>Nihad Babayev</h1>
        <p className='myInfo'>
        My name is Nihad Babayev,
I am a self trained Frontend
developer. I am from
Azerbaijan but, currently I
am living in Poland,
Warsaw. Currently I can
speak in Azeri(native),
Turkish(c2), Russian(A1),
Polish(B1) And
English(B2). 
        </p>
        <span className='flex direction_row'>
        <Link to="/Portfolio" className='flex justify_center align_center'>Portfolio</Link>
        <Link to="/Contact" className='flex justify_center align_center'>Contact</Link>
        </span>
        </span>
    </div>
  )
}

export default AboutMe
