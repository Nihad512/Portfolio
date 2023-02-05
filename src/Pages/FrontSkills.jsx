import React from 'react'

function FrontSkills() {
  return (
    <div className='flex direction_column'>
    <div className='flex align_center FrontSkills'>
    <h1>Programming Skills</h1>
    </div>
    <div className='flex justify_between mySkills'>
    <span className='flex direction_column generalCode '>
      <p>What are my Skills?</p>
     <p>Web Development</p>
     <p>Although i Also know back end Languages such as C# and PHP currently my Main Job is Front end web development
</p>
     <p>Software Engineering</p>
     <p>I have been developing Softwares since last year in C# and if you want to see my skills you can access my projects in Github
</p>
<p>Database</p>
<p> I have been Working on both relational and noSQL databases since last year although i dont have any professional experiance i have been developing databases for my projects on my own
</p>
    </span>
    <span className='flex direction_column'>
      <p>Coding skills</p>
      <label htmlFor='HTML'>HTML</label>
      <progress id="HTML" value="100" max="100"></progress>
      <label htmlFor='CSS'>CSS</label>
      <progress id="CSS" value="80" max="100"></progress>
      <label htmlFor='JS'>Javascript</label>
      <progress id="JS" value="80" max="100"></progress>
      <label htmlFor='react'>Reactjs</label>
      <progress id="react" value="70" max="100"></progress>
      <label htmlFor='react'>C#</label>
      <progress id="react" value="60" max="100"></progress>
      <label htmlFor='react'>MySql</label>
      <progress id="react" value="70" max="100"></progress>
      <label htmlFor='react'>Php</label>
      <progress id="react" value="40" max="100"></progress>
    </span>
    </div>
    </div>
  )
}

export default FrontSkills
