import type { NextPage } from 'next';
import AboutScreen from '../components/screens/about.screen';
import { StoryList } from '../components/stories.component';
import { ABOUT_ME_ID, getStoryList, getStoryPage } from '../utils/notion';
import { NotionPageType } from '../utils/types';

type Props = {
  about_me_page: NotionPageType;
};
const AboutMePage = ({ about_me_page }: Props) => {
  return (
    <>
      <AboutScreen block={about_me_page} />
    </>
  );
};

export async function getStaticProps() {
  const about_me_page = await getStoryPage(ABOUT_ME_ID);

  return {
    props: {
      about_me_page,
    },
  };
}

export default AboutMePage;
