import React from 'react'
import './Quote.css'
import { useEffect,useState } from 'react';
import {MdDelete} from 'react-icons/md'



function Quote({ id, content, author, key ,handleDeleteBookmark}) {
  return (
    <div>
      <div className="qbody">
            <div className="quote">{content}</div>
            <div className="author">- {author}</div>
            <div className="delete" onClick={() => handleDeleteBookmark(id)}><MdDelete size={25}/></div>
      </div>
    </div>
  )
}

export default Quote;
