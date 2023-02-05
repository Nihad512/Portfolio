import { useState, React }  from 'react'

function Contact() {
  const [message,setMessage]=useState("");
  const [subject,setSubject]=useState("")
  const onchange=e=>setMessage(e.target.value);
  const subjectmaker=e=>setSubject(e.target.value);
  return (
    <div className='flex direction_column'>
     <div className='flex align_center FrontSkills'>
    <h1>Contact</h1>
    </div>
    <div className="flex direction_row parent">
    <span className='flex direction_column  details '>
     <p className='indicator'>+48-513-993-153</p>
     <p className='explaining'>Phone numberr</p>
     <p className='indicator'>Poland</p>
     <p className='explaining'>Country of Residense</p>
     <p className='indicator'>babayevnihad139@gmail.com</p>

    </span>
    <span className='flex direction_column contact'>
      <p>Contact me!</p>
      <input  type="text" placeholder='Subject of your email' value={subject} onChange={subjectmaker} name="" id="" />
      <input type="text" placeholder='Context of your email' value={message} onChange={onchange} name="" id="" />
      <a  className='flex align_center justify_center' href={`mailto:babayevnihad139@gmail.com?Subject=${subject}&body=${message}`}>Send Email</a>   
      
    </span>
      
    </div> 

    </div>
  )
}

export default Contact
