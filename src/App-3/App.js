import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";


// My access key from unsplash 
const API_KEY = "86uHfQfDtcgfOnw1fYT7jv6C8_aLsOauGGQNNqIhUTQ";


const fetcher = (url) => axios.get(url).then((res) => res.data);

// App component 
const App = () => {

  const [query, setQuery] = useState("africa");

  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&per_page=9`;

  
  const { data, error, isLoading } = useSWR(url, fetcher);

  
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    if (inputValue.trim()) {
      setQuery(inputValue);
    }
  };

  // Early return 
  if (error) return <div>Error loading images...</div>;

  return (
    <>
      <div className="heading">

        {/* Search form */}
        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search for photos..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="app">
        
        <div className="photo-grid">
    
          {isLoading || !data
            ? Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} height={200} />
              ))
            : 
              data.results.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="photo"
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default App;
