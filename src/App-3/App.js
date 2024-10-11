import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

const API_KEY = "86uHfQfDtcgfOnw1fYT7jv6C8_aLsOauGGQNNqIhUTQ";

// Function to fetch data from Unsplash API
const fetcher = (url) => axios.get(url).then((res) => res.data);

const App = () => {
  // State to store the current search term
  const [query, setQuery] = useState("africa"); // Default search term is 'africa'

  // Construct the API URL
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&per_page=9`;

  // Use SWR to fetch the data with caching
  const { data, error, isLoading } = useSWR(url, fetcher);

  // Function to handle form submission (triggering a new search)
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    if (inputValue.trim()) {
      setQuery(inputValue);
    }
  };

  // If error occurs, show an error message
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
        {/* Image display section */}
        <div className="photo-grid">
          {/* Show skeletons while images are loading */}
          {isLoading || !data
            ? Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} height={200} />
              ))
            : // Once the data is loaded, display images
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
