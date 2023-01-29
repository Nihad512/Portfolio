import React from 'react'

function Skills() {
  return (
    <div className='flex direction_column'>
    <div className='flex align_center FrontSkills'>
    <h1>Skills</h1>
    </div>
    <div className='flex justify_between mySkills'>
    <span className='flex direction_column kLanguages '>
      <p>What are my Languages that I know?</p>
     <p>English</p>
     <p>My Level of English is B2 And is backed with IELTS certificate</p>
     <p>Polish</p>
     <p>My Level of polish is A2</p>

    </span>
    <span className='flex direction_column'>
      <p>Skills</p>
      <label htmlFor='HTML'>Attention to detail</label>
      <progress id="HTML" value="70" max="100"></progress>
      <label htmlFor='CSS'>Analytical Thinking</label>
      <progress id="CSS" value="80" max="100"></progress>
      <label htmlFor='JS'>Enthusiasm to learn</label>
      <progress id="JS" value="100" max="100"></progress>
      <label htmlFor='react'>Communication</label>
      <progress id="react" value="100" max="100"></progress>
    </span>
    </div>
    </div>
  )
}

export default Skills