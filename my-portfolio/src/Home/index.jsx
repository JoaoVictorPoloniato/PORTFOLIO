import React from 'react';
import Header from '../components/Header/Header';
import Photo from '../components/Photo/Photo';
import Profile from '../components/Profile/Profile';


function Home() {
  return (
    <div>
      <Header /> 
      <Profile />
      <Photo />
    </div>
  );
}

export default Home;
