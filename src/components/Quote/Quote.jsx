import React from 'react'
import './Quote.css'
import { useEffect,useState } from 'react';
import {MdDelete} from 'react-icons/md'

const handleDeleteBookmark = (_id) => {
  const updatedBookmarks = bookmarks.filter((bookmark) => bookmark._id !== _id);
  localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  setBookmarks(updatedBookmarks);
};

function Quote({ content, author, key}) {
  return (
    <div>
      <div className="quotebody">
            <div className="quote">{content}</div>
            <div className="author">- {author}</div>
            <div className="delete" onClick={handleDeleteBookmark(key)}><MdDelete/></div>
      </div>
    </div>
  )
}

export default Quote;
