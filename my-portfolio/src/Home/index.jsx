import React from 'react';
import Header from '../components/Header/Header';
import Photo from '../components/Photo/Photo';
import Profile from '../components/Profile/Profile';
import ForMe from '../components/For-me/ForMe';


function Home() {
  return (
    <div>
      <Header /> 
      <Profile />
      <ForMe />
      <Photo />
    </div>
  );
}

export default Home;
