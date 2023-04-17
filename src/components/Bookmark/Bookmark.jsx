import React from 'react'
import './Bookmark.css'
import Quote from '../Quote/Quote'
import { useEffect, useState } from 'react';

function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedQuotes') || '[]');
    console.log(storedBookmarks)
    setBookmarks(storedBookmarks);
  }, []);

  useEffect(() => {
    if (bookmarks && bookmarks.length > 0) {
      setLoading(false);
    }
  }, [bookmarks]);

  return (
    <div className='bookmarks'>
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => (
          <Quote
            key={bookmark._id}
            content={bookmark.content}
            author={bookmark.author}
          />
        ))
      ) : (
        <p>No bookmarks yet.</p>
      )}
    </div>
  )
}

export default Bookmark
