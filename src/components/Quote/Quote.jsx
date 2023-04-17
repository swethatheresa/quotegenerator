import React from 'react'
import './Quote.css'
function Quote({ quote, author}) {
  return (
    <div>
      <div className='quotebody'>
        <div className='quote'></div>
        <div className='author'></div>
      </div>
    </div>
  )
}

export default Quote
