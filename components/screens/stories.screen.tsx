import React from 'react';
import { BiMapPin, BiMenu } from 'react-icons/bi';
import BusinessExperience from '../businessExperiences.component';
import DrawerWrapper from '../drawer.component';
import HeroSection from '../heroSection.component';
import TopMenu from '../top_menu.component';
import Stories, { StoryList, StoryListItem } from '../stories.component';

type Props = {
  stories: StoryList[];
};

const StoriesScreen = (props: Props) => {
  return (
    <>
      <DrawerWrapper>
        <TopMenu />
        <div className="px-4">
          {props.stories.map((story) => {
            return <StoryListItem StoryData={story} key={story.title} />;
          })}
        </div>
      </DrawerWrapper>
    </>
  );
};

export default StoriesScreen;
