import React from 'react'
import { useEffect,useState } from 'react';
import './Home.css'

function Home() {

  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.quotable.io/tags')
      .then((response) => response.json())
      .then((data) => setTags(data.results))
      .catch((error) => console.error(error))
  }, []);

  useEffect(() => {
    if (tags) {
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

  return (
    <div className="home">
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
      <select className='tags 'value={selectedTag} onChange={handleTagChange}>
              <option value="">Random</option>
              {tags && tags.map((tag) => (
                <option key={tag._id} value={tag.name}>
                  {tag.name}
                </option>
              ))}
      </select>
    </div>
  );
}

export default Home
