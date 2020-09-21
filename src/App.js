import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';


const App = () => {
  const [posts, setposts] = useState(dummyData);
  const [search, setsearch] = useState("");

  console.log(posts)

  const likePost = postId => {

     setposts(posts.map(
      (data) => {
        if(data.id === postId) {
          return {...data, likes : data.likes + 1}
          } else {
            return data;
          }
        }
    ))
  };

  return (
    <div className='App'>
      <SearchBar search={search} />
      <Posts posts={posts} likePost={likePost} />
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
