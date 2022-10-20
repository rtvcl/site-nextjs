import React from 'react';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from 'react-notion';
import StoriesScreen from '../../components/screens/stories.screen';
import { StoryList, StoryListItem } from '../../components/stories.component';
import { getStoryList } from '../../utils/notion';
type Props = {
  stories: StoryList[];
};

const Stroies = (props: Props) => {
  return <StoriesScreen stories={props.stories} />;
};

export async function getStaticProps() {
  const stories = await getStoryList();
  return {
    props: {
      stories,
    },
  };
}

export default Stroies;
