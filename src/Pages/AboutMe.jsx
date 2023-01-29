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
        <p className='myInfo'>Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !</p>
        <span className='flex direction_row'>
        <Link to="/Portfolio" className='flex justify_center align_center'>Portfolio</Link>
        <Link to="/Contact" className='flex justify_center align_center'>Contact</Link>
        </span>
        </span>
    </div>
  )
}

export default AboutMe