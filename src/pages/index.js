import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne, 
  homeObjTwo, 
  homeObjThree, 
  homeObjFour, 
  homeObjFive,
  homeObjSix, 
  homeObjSixSix, 
  homeObjSeven, 
  homeObjEight, 
  homeObjNine, 
  homeObjTen, 
  homeObjEleven, 
  homeObjTwelve, 
  homeObjThirteen, 
  homeObjFourteen, 
  homeObjFifteen, 
  homeObjSixteen, 
  homeObjSeventeen
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjFive}/>
      <InfoSection {...homeObjSix}/>
      <InfoSection {...homeObjSixSix}/>
      <InfoSection {...homeObjSeven}/>
      <InfoSection {...homeObjEight}/>
      <InfoSection {...homeObjNine}/>
      <InfoSection {...homeObjTen}/>
      <InfoSection {...homeObjEleven}/>
      <InfoSection {...homeObjTwelve}/>
      <InfoSection {...homeObjThirteen}/>
      <InfoSection {...homeObjFourteen}/>
      <InfoSection {...homeObjFifteen}/>
      <InfoSection {...homeObjSixteen}/>
      <InfoSection {...homeObjSeventeen}/>
    </>
  );
};

export default Home;




