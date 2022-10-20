import AboutScreen from '../components/screens/about.screen';
import RoadmapScreen from '../components/screens/roadmapscreen';
import { getStoryPage, ROADMAP_ID } from '../utils/notion';
import { NotionPageType } from '../utils/types';

type Props = {
  roadmap_me_page: NotionPageType;
};
const RoadmapPage = ({ roadmap_me_page }: Props) => {
  return (
    <>
      <RoadmapScreen block={roadmap_me_page} />
    </>
  );
};

export async function getStaticProps() {
  const roadmap_me_page = await getStoryPage(ROADMAP_ID);
  return {
    props: {
      roadmap_me_page,
    },
  };
}

export default RoadmapPage;
