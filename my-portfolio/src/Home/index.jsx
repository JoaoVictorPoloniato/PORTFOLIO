import React from 'react';
import Header from '../components/Header/Header';
import Photo from '../components/Photo/Photo';
import Profile from '../components/Profile/Profile';
import ForMe from '../components/For-me/ForMe';
import Skills from '../components/Skills/Skills';


function Home() {
  return (
    <div className='principal'>
      <Header /> 
      <Photo />
      <Profile />
      <ForMe />
      <Skills />
    </div>
  );
}

export default Home;
