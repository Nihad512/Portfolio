import React from 'react'

function Footer() {
  return (
    <div className='flex direction_column'>
        <hr/>
        <div className='flex direction_row justify_between Social'>
            <span>
                <a href="">Instagram</a>
                <a href="">LinkedIn</a>
                <a href="">Github</a>
            </span>
            <span>
            © 2023 Nihad Babayev.

            </span>
        </div>
    </div>
  )
}

export default Footer