import type { NextPage } from 'next';
import HomeScreen from '../components/screens/home.screen';
import { StoryList } from '../components/stories.component';
import { getStoryList } from '../utils/notion';

type Props = {
  stories: StoryList[];
};
const Home = ({ stories }: Props) => {
  return (
    <>
      <HomeScreen stories={stories} />
    </>
  );
};

export async function getStaticProps() {
  const stories = await getStoryList();
  return {
    props: {
      stories,
    },
  };
}

export default Home;
