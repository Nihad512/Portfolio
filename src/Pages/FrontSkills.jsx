import React from 'react'

function FrontSkills() {
  return (
    <div className='flex direction_column'>
    <div className='flex align_center FrontSkills'>
    <h1>Front-end Skills</h1>
    </div>
    <div className='flex justify_between mySkills'>
    <span className='flex direction_column generalCode '>
      <p>What are my Skills?</p>
     <p>Web Development</p>
     <p>Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou
</p>
     <p>Software Engineering</p>
     <p>Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou
</p>
<p>Database</p>
     <p>Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou
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