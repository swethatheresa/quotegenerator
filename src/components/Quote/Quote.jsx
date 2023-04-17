import React from 'react'
import './Quote.css'
function Quote({ quote, author}) {
  return (
    <div>
      <div className="quotebody">
        {loading ? (
          <p>Loading...</p>
        ) : (
            <div>
              <div className="quote">{quote.content}</div>
              <div className="author">- {quote.author}</div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Quote
