import React from 'react';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer,
    HeroBg, 
    VideoBg,
    HeroH1,
    HeroContent,
    HeroP} 
    from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Technology can give learners a voice that they may not have heard before.</HeroH1>
            <HeroP>Your Vision, Our Tech</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
