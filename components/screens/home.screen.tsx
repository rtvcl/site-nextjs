import React from 'react';
import { BiMapPin, BiMenu } from 'react-icons/bi';
import BusinessExperience from '../businessExperiences.component';
import DrawerWrapper from '../drawer.component';
import HeroSection from '../heroSection.component';
import TopMenu from '../top_menu.component';
import Stories, { StoryList } from '../stories.component';

type Props = { stories: StoryList[] };

const HomeScreen = (props: Props) => {
  return (
    <>
      <DrawerWrapper>
        <TopMenu />
        <HeroSection />
        <BusinessExperience />
        <Stories stories={props.stories} />
      </DrawerWrapper>
    </>
  );
};

export default HomeScreen;
