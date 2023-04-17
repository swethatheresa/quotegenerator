import React from 'react'
import { useEffect,useState } from 'react';
import './Home.css'
import { BsFillBookmarkPlusFill } from "react-icons/bs";

function Home() {

  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.quotable.io/tags')
      .then((response) => response.json())
      .then((data) => {
        setTags(data)
      })
      .catch((error) => console.error(error))
  }, []);

  useEffect(() => {
    if (tags && tags.length > 0) {
      console.log(tags)
      setLoading(false);
    }
  }, [tags]);
  
  useEffect(() => {
    if (selectedTag) {
      setLoading(true);
      fetch(`https://api.quotable.io/random?tags=${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setQuote(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => setQuote(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [selectedTag]);

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleNextQuote = () => {
    if (selectedTag) {
      setLoading(true);
      fetch(`https://api.quotable.io/random?tags=${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setQuote(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => setQuote(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  };
  
  return (
    <div className="home">
      <div className="quotebody">
        {loading ? (
          <p>Loading...</p>
        ) : (
            <div>
              <div className="quote">{quote.content}</div>
              <div className="author">- {quote.author}</div>
              <BsFillBookmarkPlusFill/>
            </div>
          )}
      </div>
      
      <select className='tags 'value={selectedTag} onChange={handleTagChange}>
              <option value="">Random</option>
              {tags && tags.map((tag) => (
                <option key={tag._id} value={tag.name}>
                  {tag.name}
                </option>
              ))}
      </select>
      <button className='btn' onClick={handleNextQuote} >Next Quote</button>
    </div>
  );
}

export default Home
